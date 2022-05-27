

// 使用 Github 提供的 API 来执行

// 使用了 octokit 第三方库 ： https://www.npmjs.com/package/octokit

const { Octokit } = require("@octokit/rest");


// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo

// TODO: auth : 为github的 中创建的 token 
// const octokit = new Octokit({ auth: `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` });


// octokit  api  create issuse


// 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

const octokit = new Octokit({ auth: `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` });

octokit.rest.issues.create({
  owner: "yellowsae",  // 作者
  repo: "try_github_action",  // 对应的仓库
  title: "Github Action 3",  // 标题
  body: "github action create"  // 内容
});


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
