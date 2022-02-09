import { createSection, createParagraph, createBullet } from "../structs";

export default {
  name: "马锦尧",
  avatar: "/favicon.ico",
  side: [
    createSection({
      title: "关于我",
      children: [
        createParagraph({
          content:
            "小马是一位就读于麦克马斯特大学工程系技术学院软件工程专业的在读4年级留学生，并且一年到头都在使用 Vue2 和 Node.js，而最近也已经在使用 Vue3，Gin 和 MySQL。",
        }),
      ],
    }),
    createSection({
      title: "联系方式",
      children: [
        createParagraph({
          label: "手机：",
          content: "+1 (905) 923-4098",
        }),
        createParagraph({
          label: "QQ：",
          content: "907881445",
        }),
        createParagraph({
          label: "邮箱：",
          content: "jinyao.ma@outlook.com",
        }),
        createParagraph({
          label: "目前所在地：",
          content: "加拿大安大略省哈密尔顿市",
        }),
        createParagraph({
          label: "GitHub：",
          content: "https://github.com/jinyaoMa",
        }),
        createParagraph({
          label: "Linkedin：",
          content: "https://www.linkedin.com/in/jinyaoMa",
        }),
      ],
    }),
    createSection({
      title: "技术技能",
      children: [
        createParagraph({
          label: "编程语言：",
          content:
            "Golang, ES6, Stylus, Less, HTML5, CSS3, CommonJS, Java, Python3, Kotlin, PHP, C#, Swift",
        }),
        createParagraph({
          label: "框架：",
          content: "Vue, React, Gin, Express, Laravel, ASP.NET MVC",
        }),
        createParagraph({
          label: "开发环境：",
          content:
            "VSCode, Android Studio, Git Bash, GitHub, LAMP, Swagger, Photoshop, Illustrator",
        }),
        createParagraph({
          label: "数据库平台：",
          content: "MySQL, SQLite, Oracle DB",
        }),
        createParagraph({
          label: "操作系统：",
          content: "Window 10, Max OS X, CentOS",
        }),
      ],
    }),
  ],
  body: [
    createSection({
      title: "教育背景",
      children: [
        createSection({
          title: "麦克马斯特大学",
          time: "2020年5月 至今",
          children: [
            createParagraph({
              content: "本科 - 工程系技术学院 - 软件工程",
            }),
            createParagraph({
              content: "目前平均学分绩点 GPA 10/12",
            }),
          ],
        }),
        createSection({
          title: "莫霍克学院",
          time: "2016年1月 至 2019年12月",
          children: [
            createParagraph({
              content: "专科 - 计算机系统技术课程 - 软件开发",
            }),
            createParagraph({
              content: "毕业平均学分绩点 GPA 92/100",
            }),
          ],
        }),
      ],
    }),
    createSection({
      title: "项目经历",
      children: [
        createSection({
          title: "上班打卡追踪 Web 应用",
          children: [
            createParagraph({
              content: "个人项目 | 2021年11月 至 2021年12月",
            }),
            createBullet({
              content: "项目链接：https://github.com/jinyaoMa/20211108-daka",
            }),
            createBullet({
              content:
                "技术栈：Vue, Element UI, Axios, Node.js, Gin, Gorm, MySQL, Swagger, JWT",
            }),
            createBullet({
              content: "用于追踪员工工作时间的 CRUD 小工具",
            }),
          ],
        }),
        createSection({
          title: "内容管理 Web 应用",
          children: [
            createParagraph({
              content: "个人项目 | 2021年6月 至 2021年8月",
            }),
            createBullet({
              content: "项目链接：https://github.com/jinyaoMa/go-experiment",
            }),
            createBullet({
              content:
                "技术栈：Vue, Axios, Fontawesome, Node.js, Gin, Gorm, SQLite",
            }),
            createBullet({
              content:
                "可以储存和操作文件的简单内容管理系统，涉及到 OS I/O 操作",
            }),
          ],
        }),
        createSection({
          title: "客户来访管理 Web 应用",
          children: [
            createParagraph({
              content: "个人项目 | 2020年11月 至 2021年1月",
            }),
            createBullet({
              content: "项目链接：https://github.com/jinyaoMa/ewyn-admin",
            }),
            createBullet({
              content:
                "技术栈：Vue, Element UI, ECharts, Axios, Express, Node.js, MySQL",
            }),
            createBullet({
              content:
                "实现了 CRUD 功能的网站，包含了 4 个以上不同类型的 Web 表单",
            }),
          ],
        }),
        createSection({
          title: "VuePress 主题",
          children: [
            createParagraph({
              content: "个人项目 | 2020年6月 至 2020年9月",
            }),
            createBullet({
              content:
                "项目链接：https://github.com/jinyaoMa/vuepress-theme-mustom",
            }),
            createBullet({
              content: "技术栈：VuePress, Vue, Fontawesome, Axios, Node.js",
            }),
            createBullet({
              content: "在 GitHub 上获得了 22+ 颗星星",
            }),
          ],
        }),
        createSection({
          title: "Hexo 主题",
          children: [
            createParagraph({
              content: "个人项目 | 2019年2月 至 2020年3月",
            }),
            createBullet({
              content:
                "项目链接：https://github.com/jinyaoMa/hexo-theme-mustom",
            }),
            createBullet({
              content: "技术栈：Hexo, Fontawesome, Axios, Node.js",
            }),
            createBullet({
              content: "在 GitHub 上获得了 38+ 颗星星",
            }),
          ],
        }),
        createSection({
          title: "浮窗音乐播放器",
          children: [
            createParagraph({
              content: "个人项目 | 2018年4月 至 2018年9月",
            }),
            createBullet({
              content: "项目链接：https://github.com/jinyaoMa/YaoCollection",
            }),
            createBullet({
              content: "技术栈：Java, Android SDK, Vitamio, Thunder",
            }),
            createBullet({
              content: "实验从 music.163.com 爬取音乐信息和音频资源",
            }),
            createBullet({
              content:
                "使用 Postman 分析了 music.163.com 中 10+ 个不同的 URL/API 和 RSA/AES 的加密实现",
            }),
          ],
        }),
      ],
    }),
  ],
};
