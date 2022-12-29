import { createSection, createParagraph, createBullet } from "../structs"

export default {
  name: "马锦尧",
  avatar: "",
  side: [
    createSection({
      children: [
        createParagraph({
          content:
          "小马 是一位就读于 麦克马斯特大学工程系技术学院软件工程专业 的 在读4年级 留学生，并且 一年到头 都在使用 Vue 和 Gin 。",
        }),
        createParagraph({
          content:
            "小马 比较擅长 前端 和 RESTful API 的开发，还喜欢在开发中追求代码的模块化和复用性。",
        }),
        createParagraph({
          content: "小马近期都在熟悉 React 和 TypeScript 。",
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
          label: "邮箱：",
          content: "jinyao.ma@outlook.com",
        }),
        createParagraph({
          label: "目前所在地：",
          content: "加拿大安大略省哈密尔顿市",
        }),
        createParagraph({
          label: "GitHub: ",
          content: "https://github.com/jinyaoMa",
        }),
        createParagraph({
          label: "LinkedIn: ",
          content: "https://linkedin.com/in/jinyaoMa",
        }),
      ],
    }),
    createSection({
      title: "技术类技能",
      children: [
        createParagraph({
          label: "前端: ",
          content:
            "Vue, React, jQuery, Element UI, Ant Design, Bootstrap, Tailwind, Fontawesome, Axios (Ajax), ECharts, Webpack",
        }),
        createParagraph({
          label: "后端: ",
          content:
            "Gin, Gorm, JWT, Express, Node, WordPress, EJS, Laravel, CodeIgniter, ASP.NET MVC, RESTful API",
        }),
        createParagraph({
          label: "开发语言: ",
          content:
            "JavaScript (ES6+), HTML, CSS (Stylus, Less, Sass), TypeScript, Go, Java, Python, PHP",
        }),
        createParagraph({
          label: "开发工具/文档工具: ",
          content:
            "VS Code, Android Studio, Git, Photoshop, Illustrator, VuePress, dumi, Hexo",
        }),
        createParagraph({
          label: "数据库平台: ",
          content: "MySQL, SQLite, Oracle DB",
        }),
        createParagraph({
          label: "操作系统/云平台: ",
          content: "Windows 11, CentOS, Alibaba Cloud",
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
            createBullet({
              content:
                "网络安全、操作系统基础、软件架构、敏捷开发, 看板管理, 精益概念 等等",
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
            createBullet({
              content:
                "Web/移动开发基础、Vue/React + Express.js/Laravel/ASP.NET、Java 安卓开发 等等",
            }),
          ],
        }),
      ],
    }),
    createSection({
      title: "工作经历",
      children: [
        createSection({
          title: "后端开发程序员",
          children: [
            createParagraph({
              content: "Fine Studio | 实习 | 2022年5月 至 2022年9月",
            }),
            createBullet({
              content:
                "使用 WordPress 和 SiteGround 开发、测试和部署网站。",
            }),
            createBullet({
              content:
                "开发了 22+ 个小网站，离职前都成功交付，其中包含产出 16+ 个视频录制用户教程和 6+ 次成功会议。",
            }),
            createBullet({
              content:
                "参与了一个 B2C 商城系统的后端服务层的开发和数据库结构设计，其中包含产出 2+ 个 UML 图、18+ 个 API 接口和 27+ 个数据库表。",
            }),
          ],
        }),
        createSection({
          title: "初级软件开发程序员",
          children: [
            createParagraph({
              content:
                "江门市普政信息科技有限公司 | 实习 | 2019年6月 至 2019年8月",
            }),
            createBullet({
              content:
                "使用 HTML/CSS/JavaScript 开发和测试 Web 应用。",
            }),
            createBullet({
              content:
                "使用了一个庞大的数据库，写过数据查询语句和开发网站功能，其中包含产出 20+ 个 API 接口和 30+ 个报告生成模板。",
            }),
            createBullet({
              content:
                "开发了多个带有 CRUD 功能和数据展示的网页，离职前都成功交付，其中包含产出 10+ 个 Web 表单和 6+ 个图表。",
            }),
            createBullet({
              content:
                "使用 Jest 进行前端自定义组件的单元测试。",
            }),
          ],
        }),
      ],
    }),
    createSection({
      title: "项目经历",
      children: [
        createSection({
          title: "VuePress 主题",
          children: [
            createParagraph({
              content: "个人项目 | 2020年6月 至 2020年9月",
            }),
            createBullet({
              content: "https://github.com/jinyaoMa/vuepress-theme-mustom",
            }),
            createBullet({
              content:
                "重新设计之前 Hexo 主题的 UI ，并迁移至 VuePress ，在 GitHub 上获得了 26+ 颗星星。",
            }),
          ],
        }),
      ],
    }),
  ],
}
