const { path } = require("@vuepress/utils");

module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "My Resume",
      description: "My Resume",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "我的简历",
      description: "我的简历",
    },
  },
  themeConfig: {
    logo: "/favicon.ico",
    repo: "jinyaoMa/resume-next",
    sidebar: false,
    lastUpdated: false,
    contributors: false,
    editLink: true,
    locales: {
      "/": {
        selectLanguageName: "English",
        editLinkText: "Edit my resume",
      },
      "/zh/": {
        selectLanguageName: "简体中文",
        editLinkText: "编辑我的简历",
      },
    },
  },
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
  ],
};