const { path } = require("@vuepress/utils")

module.exports = {
  base: "/resume-next/",
  head: [["link", { rel: "icon", href: "/resume-next/favicon.ico" }]],
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
        navbar: [
          {
            text: "Choose a version",
            children: ["/README.md", "/v20220315.md", "/v20220209.md"],
          },
        ],
        selectLanguageText: "Choose a language",
        selectLanguageName: "English",
        editLinkText: "Edit my resume",
      },
      "/zh/": {
        navbar: [
          {
            text: "选择版本",
            children: ["/zh/README.md", "/zh/v20220209.md"],
          },
        ],
        selectLanguageText: "选择语言",
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
}
