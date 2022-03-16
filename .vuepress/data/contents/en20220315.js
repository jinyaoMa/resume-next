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
          label: "Languages for Development: ",
          content:
            "JavaScript (ES6+), HTML, CSS (Stylus, Less, Sass), TypeScript, Go, Java, Python, PHP",
        }),
        createParagraph({
          label: "Tools for Development: ",
          content: "VS Code, Android Studio, Git, Photoshop, Illustrator",
        }),
        createParagraph({
          label: "JavaScript Frameworks: ",
          content: "Vue, React, jQuery",
        }),
        createParagraph({
          label: "CSS Frameworks: ",
          content: "Bootstrap, Tailwind",
        }),
        createParagraph({
          label: "Web Frameworks: ",
          content: "Gin, Express, Laravel",
        }),
        createParagraph({
          label: "UI Kits: ",
          content: "Element UI, Ant Design",
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
                "Web development: HTML5 & CSS3, PHP, JavaScript, ASP.NET, CodeIgniter, Laravel, Vue, React",
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
                "Vue, JavaScript, .NET MVC, RESTful API, Oracle DB, Element UI",
            }),
            createBullet({
              content:
                "Responsible for developing and testing web applications using HTML/CSS/JavaScript",
            }),
            createBullet({
              content:
                "Data query, feature development and debug in large database",
            }),
            createBullet({
              content:
                "Development of multiple web pages with CRUD functionalities and data presentation",
            }),
            createBullet({
              content:
                "Unit testing the custom UI components using Jest to deliver reliable user experience",
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
              content: "Vue, Axios, Fontawesome, Node, Gin, Gorm, SQLite",
            }),
            createBullet({
              content:
                "Simple network storage to store and operate files with OS I/O operations",
            }),
            createBullet({
              content:
                "Development of simple UI and file access functions to access media in PC via smartphone",
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
              content: "VuePress, Vue, Fontawesome, Axios, Node",
            }),
            createBullet({
              content:
                "Redesign of Hexo theme UI and move to VuePress with better look",
            }),
            createBullet({
              content: "Get better understanding to UI kit development in Vue",
            }),
            createBullet({
              content: "More than 22 stars and 6 forks on GitHub",
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
              content: "Hexo, EJS, stylus, Fontawesome, Axios, Node",
            }),
            createBullet({
              content:
                "Design a special blog theme that is really different to others",
            }),
            createBullet({
              content:
                "Get better understanding to CSS features and SSR on Node",
            }),
            createBullet({
              content: "More than 38 stars and 8 forks on GitHub",
            }),
          ],
        }),
      ],
    }),
  ],
};
