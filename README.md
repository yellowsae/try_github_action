
# 使用 Github Action 自动创建 Issuse

- 自动执行
- 使用JS创建Issuse



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

```



### 3. 配置 Github 的自动化 Action
