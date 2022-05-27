
# 使用 Github Action 自动创建 Issuse

- 自动执行
- 使用JS创建Issuse
- 参考： https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html


### 1. 使用脚本

```js
// index.js

// 使用了 octokit 第三方库 ： https://www.npmjs.com/package/octokit

const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({ auth: `****` });

octokit.rest.issues.create({
  owner: "yellowsae",  // 作者
  repo: "try_github_action",  // 对应的仓库
  title: "Github Action 2",  // 标题
  body: "test2"  // 内容
});
```




### 2. 创建 Action 指定 index.js
- 参考： https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
1. 创建 `action.yml`

```yml
name: 'test create issuse'   # 项目名字
description: 'test create issuse'  # 描述

# input 表示 action 可以接收外部传入的值
inputs:
  token:  # id of input  #  .github/workflows/main.yml 传入进来 token 
    description: 'github token'  # 数据描述
    required: true  # 是否必须
# output 表示 action 可以传出数据
# outputs:
#   time: # id of output
#     description: 'The time we greeted you'
runs:
  using: 'node12' #当前的环境
  # main: 'index.js' # 主要执行的文件
  main: "./dist/index.js"  # 编译后的 index.js

# 使用 npm i -g @vercel/ncc   -> 将当前写的 index.js 的 Node16 版本 转为可以识别的  Node12 版本
# 在 packages中： "build": "ncc build index.js --license licenses.txt"

```



### 3. 配置 Github 的自动化 Action

创建文件：`.githun/workflows/main.yml`

```yml
on: [push]  # 触发时机 ->  当执行 push 时

# on: 
#   schedule: 
#   # 00: 01  -> Github 使用的是 UTC的时区 
#   # 相差8个小时  也就是 24 - 8  = 16
#     - cron: "1 16 * * *"
jobs:  # 需要执行的 job 
  create_issuse_action:
    runs-on: ubuntu-latest # 指定运行的环境
    name: create create issuse
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Build
        run: npm install && npm run build  # 写后不用在本地 build 
      - name: create issuse action  # 起个项目名
        uses: ./  # 指定根目录下的 action.yml  ->  同样可以指定 执行 某个仓库的 index.js 文件 ：  yellowsae/try_github_action@main ： 需要加上 @main 分支名
        # ${{secrets.TOKEN}}  # 在Github上设置 secrets.TOKEN -> 非明文  -> 通过 传参给 action.yml 
        with:  # 传参用的
          token: ${{secrets.TOKEN}}   # 传参给 action.yml 
          
      # Use the output from the `hello` step  #  output 验证
      # - name: Get the output time
      #   run: echo "The time was ${{ steps.hello.outputs.time }}"

# 当上传到 github 时候 主动触发 此文件

```
