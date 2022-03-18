import { createSection, createParagraph, createBullet } from "../structs";

export default {
  name: "Jinyao Ma (Mark)",
  avatar: "",
  side: [
    createSection({
      children: [
        createParagraph({
          content:
            "Mark is currently a year-3 international student enrolled in B. Tech Software Engineering program at McMaster University who experience all the year around with Vue and Gin.",
        }),
        createParagraph({
          content:
            "He is excelled in front-end development and RESTful API, and also like to research about modularization and reusability in development.",
        }),
        createParagraph({
          content: "He is getting familiar with React and TypeScript.",
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
          label: "LinkedIn: ",
          content: "https://linkedin.com/in/jinyaoMa",
        }),
      ],
    }),
    createSection({
      title: "TECHNICAL SKILLS",
      children: [
        createParagraph({
          label: "Front End: ",
          content:
            "Vue, React, jQuery, Element UI, Ant Design, Bootstrap, Tailwind, Fontawesome, Axios (Ajax), ECharts, Webpack",
        }),
        createParagraph({
          label: "Back End: ",
          content:
            "Gin, Gorm, JWT, Express, Node, EJS, Laravel, CodeIgniter, ASP.NET MVC, RESTful API",
        }),
        createParagraph({
          label: "Languages for Development: ",
          content:
            "JavaScript (ES6+), HTML, CSS (Stylus, Less, Sass), TypeScript, Go, Java, Python, PHP",
        }),
        createParagraph({
          label: "Development/Documentation Tools: ",
          content:
            "VS Code, Android Studio, Git, Photoshop, Illustrator, VuePress, dumi, Hexo",
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
                "Web and mobile development fundamentals, Vue/React + Express.js/Laravel/ASP.NET, Android development in Java",
            }),
            createBullet({
              content: "Graduated in 2019 with GPA 92/100",
            }),
          ],
        }),
      ],
    }),
    createSection({
      title: "WORK EXPERIENCE",
      children: [
        createSection({
          title: "Junior Software Developer",
          children: [
            createParagraph({
              content: "Jiangmen Puzheng IT Co., Ltd. | June 2019 to Aug. 2019",
            }),
            createBullet({
              content:
                "Responsible for developing and testing web applications using HTML/CSS/JavaScript",
            }),
            createBullet({
              content:
                "Data query, feature development and debuging in large database, resulting in rich cooperation with colleagues, and also 20+ APIs and 30+ report generator templates built and documented",
            }),
            createBullet({
              content:
                "Development of multiple web pages with CRUD functionalities and data presentation, resulting in successful project delivery with 10+ web forms and 6+ charts built",
            }),
            createBullet({
              content:
                "Unit testing the custom UI components using Jest, resulting in reliable user experience",
            }),
          ],
        }),
      ],
    }),
    createSection({
      title: "PROJECTS",
      children: [
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
              content:
                "Develop a network storage with simple UI and file access functions, resulting in 2x of convenience via increased accessiblity to media in server",
            }),
          ],
        }),
        createSection({
          title: "VuePress Theme",
          children: [
            createParagraph({
              content: "Individual | June 2020 to Sept. 2020",
            }),
            createBullet({
              content: "https://github.com/jinyaoMa/vuepress-theme-mustom",
            }),
            createBullet({
              content:
                "Redesign of Hexo theme UI and move to VuePress, resulting in an extra 22+ stars and 6+ forks on GitHub due to a better look",
            }),
            createBullet({
              content:
                "Experiment with documentation tool, resulting in more than 60% reuseable code via increased understanding to UI development",
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
              content:
                "Design a special blog theme, resulting in 38+ stars and 8+ forks on GitHub due to the theme's special layout and style",
            }),
            createBullet({
              content:
                "Experiment with static blog generator, resulting in 2x faster coding speed via increased understanding to CSS features",
            }),
          ],
        }),
      ],
    }),
  ],
};
