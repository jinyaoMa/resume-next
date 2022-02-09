import { createSection, createParagraph, createBullet } from "../structs";

export default {
  name: "Ma, Jinyao (Mark)",
  avatar: "/favicon.ico",
  side: [
    createSection({
      title: "ABOUT ME",
      children: [
        createParagraph({
          content:
            "Mark is an international student currently enrolled in level 4 of B. Tech Software Engineering program at McMaster University who experience all the year around with Vue2 and Node.js but recently with Vue3, Gin and MySQL.",
        }),
        createParagraph({
          content:
            "Mark is excelled in front-end development and RESTful API, and also like to pursue modularization and reusability in development.",
        }),
      ],
    }),
    createSection({
      title: "CONTACT INFORMATION",
      children: [
        createParagraph({
          label: "Cellphone: ",
          content: "+1 (905) 923-4098",
        }),
        createParagraph({
          label: "Email: ",
          content: "maj39@mcmaster.ca",
        }),
        createParagraph({
          label: "Location: ",
          content: "Hamilton, ON",
        }),
        createParagraph({
          label: "GitHub: ",
          content: "https://github.com/jinyaoMa",
        }),
        createParagraph({
          label: "Linkedin: ",
          content: "https://www.linkedin.com/in/jinyaoMa",
        }),
      ],
    }),
    createSection({
      title: "TECHNICAL SKILLS",
      children: [
        createParagraph({
          label: "Programming Languages: ",
          content:
            "Golang, ES6, Stylus, Less, HTML5, CSS3, CommonJS, Java, Python3, Kotlin, PHP, C#, Swift",
        }),
        createParagraph({
          label: "Frameworks: ",
          content: "Vue, React, Gin, Express, Laravel, ASP.NET MVC",
        }),
        createParagraph({
          label: "Development Environments: ",
          content:
            "VSCode, Android Studio, XCode, Git Bash, GitHub, LAMP, Swagger, Photoshop, Illustrator",
        }),
        createParagraph({
          label: "Database Platforms: ",
          content: "MySQL, SQLite, Oracle DB",
        }),
        createParagraph({
          label: "Operating Systems: ",
          content: "Window 10, Max OS X, CentOS",
        }),
      ],
    }),
  ],
  body: [
    createSection({
      title: "EDUCATION",
      children: [
        createSection({
          title: "McMaster University",
          time: "May 2020 to Present",
          children: [
            createParagraph({
              content: "Bachelor of Technology - Software Engineering",
            }),
            createBullet({
              content:
                "Network Security, Agile, Kanban, Lean, Sustainability, etc.",
            }),
            createBullet({
              content: "Current GPA 10/12",
            }),
          ],
        }),
        createSection({
          title: "Mohawk College",
          time: "Jan. 2016 to Dec. 2019",
          children: [
            createParagraph({
              content: "Computer Systems Technology - Software Development",
            }),
            createBullet({
              content:
                "Web development: HTML5 & CSS3, PHP, Javascript, ASP.NET, CodeIgniter, Laraval, Vue, React",
            }),
            createBullet({
              content: "Mobile development: Java with Android SDK",
            }),
            createBullet({
              content: "Graduated in 2019 with GPA 92/100",
            }),
          ],
        }),
      ],
    }),
    createSection({
      title: "PROJECTS",
      children: [
        createSection({
          title: "Clock In/Out Tracing Web Application",
          children: [
            createParagraph({
              content: "Individual | Nov. 2021 to Dec. 2021",
            }),
            createBullet({
              content: "https://github.com/jinyaoMa/20211108-daka",
            }),
            createBullet({
              content:
                "Vue, Element UI, Axios, Node.js, Gin, Gorm, MySQL, Swagger, JWT",
            }),
            createBullet({
              content: "CRUD tool for tracing employees' work hours",
            }),
          ],
        }),
        createSection({
          title: "Content Management Web Application",
          children: [
            createParagraph({
              content: "Individual | June 2021 to Aug. 2021",
            }),
            createBullet({
              content: "https://github.com/jinyaoMa/go-experiment",
            }),
            createBullet({
              content: "Vue, Axios, Fontawesome, Node.js, Gin, Gorm, SQLite",
            }),
            createBullet({
              content:
                "Simple CMS to store and operate files with OS I/O operations",
            }),
          ],
        }),
        createSection({
          title: "Store Visiter Management Web App",
          children: [
            createParagraph({
              content: "Individual | Nov. 2020 to Jan. 2021",
            }),
            createBullet({
              content: "https://github.com/jinyaoMa/ewyn-admin",
            }),
            createBullet({
              content:
                "Vue, Element UI, ECharts, Axios, Express, Node.js, MySQL",
            }),
            createBullet({
              content:
                "Website with CRUD implemented including more than 4 types of web forms",
            }),
          ],
        }),
        createSection({
          title: "VuePress Theme",
          children: [
            createParagraph({
              content: "Individual | Jun. 2020 to Sept. 2020",
            }),
            createBullet({
              content: "https://github.com/jinyaoMa/vuepress-theme-mustom",
            }),
            createBullet({
              content: "VuePress, Vue, Fontawesome, Axios, Node.js",
            }),
            createBullet({
              content: "More than 22 stars on GitHub",
            }),
          ],
        }),
        createSection({
          title: "Hexo Theme",
          children: [
            createParagraph({
              content: "Individual | Feb. 2019 to Mar. 2020",
            }),
            createBullet({
              content: "https://github.com/jinyaoMa/hexo-theme-mustom",
            }),
            createBullet({
              content: "Hexo, Fontawesome, Axios, Node.js",
            }),
            createBullet({
              content: "More than 38 stars on GitHub",
            }),
          ],
        }),
        createSection({
          title: "Float-window Audio Player",
          children: [
            createParagraph({
              content: "Individual | Apr. 2018 to Sept. 2018",
            }),
            createBullet({
              content: "https://github.com/jinyaoMa/YaoCollection",
            }),
            createBullet({
              content: "Java, Android SDK, Vitamio, Thunder",
            }),
            createBullet({
              content:
                "Experimented crawling audio information and source from music.163.com",
            }),
            createBullet({
              content:
                "Analyzed 10+ URLs using Postman and encryption (RSA/AES) used in music.163.com",
            }),
          ],
        }),
      ],
    }),
  ],
};
