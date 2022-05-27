

// 使用 Github 提供的 API 来执行

// 使用了 octokit 第三方库 ： https://www.npmjs.com/package/octokit

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo

// TODO: auth : 为github的 中创建的 token 
const octokit = new Octokit({ auth: `personal-access-token123` });

// octokit  api  create issuse


octokit.rest.issues.create({
  owner: "octocat",  // 作者
  repo: "hello-world",  // 对应的仓库
  title: "Hello world from " + slug,
});

