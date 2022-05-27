

// 使用 Github 提供的 API 来执行

// 使用了 octokit 第三方库 ： https://www.npmjs.com/package/octokit

const { Octokit } = require("@octokit/rest");

const core = require('@actions/core');  // 引入 @actions/core

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo

// TODO: auth : 为github的 中创建的 token 
// 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



const token = core.getInput("token");
// octokit  api  create issuse
const octokit = new Octokit({ auth: token });

octokit.rest.issues.create({
  owner: "yellowsae",  // 作者
  repo: "try_github_action",  // 对应的仓库
  title: "Github Action 3",  // 标题
  body: "github action create"  // 内容
});




// 通过 @actions/core 这个库 获取到 action.yml 传递的 token 



// const octokit = new Octokit();

// // Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories
// octokit.rest.repos
//   .listForOrg({
//     org: "octokit",
//     type: "public",
//   })
//   .then(({ data }) => {
//     // handle data
//   });
