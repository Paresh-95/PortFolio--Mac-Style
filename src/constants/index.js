const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: true,
    },
    {
        id: "portfolio",
        name: "Profile",
        icon: "profile.png",  // You can use safari icon or create a custom one
        canOpen: true,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title:
            "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
        image: "/images/blog1.png",
        link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "The Ultimate Guide to Mastering Three.js for 3D Development",
        image: "/images/blog2.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: "/images/blog3.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
];

const techStack = [
    {
        category: "Programming",
        items: ["Java", "Python", "JavaScript", "TypeScript", "PHP", "SQL"],
    },
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Spring", "Spring Boot", "Microservices", "Node.js", "Express", "NestJS"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Spring JPA", "Prisma ORM"],
    },
    {
        category: "Tools",
        items: ["Git", "GitHub", "Docker", "Kubernates", "Maven", "Redis"],
    },
    {
        category: "AI Frameworks",
        items: ["Langchain", "Spring AI", "OpenRouter", "Vercel AI SDK"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/JavaScript-Mastery-Pro",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://jsmastery.com/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/jsmasterypro",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/paresh.png",
    },
    {
        id: 2,
        img: "/images/paresh-casual.jpg",
    },
    {
        id: 3,
        img: "/images/paresh-2.jpg",
    },
    {
        id: 4,
        img: "/images/paresh-3.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1 — Row 1
        {
            id: 101,
            name: "Ajinkyatara Consultants’ Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[5vh] left-5",
            children: [
                {
                    id: 201,
                    name: "Ajinkyatara Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Ajinkyatara Consultants' website is a modern digital presence built to showcase services with clarity and trust.",
                        "Built using React, Next.js, and MongoDB, the platform ensures fast loading and clean UI.",
                    ],
                },
                {
                    id: 202,
                    name: "ajinkyatara.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://ajinkyatara.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 203,
                    name: "ajinkyatara.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: "/images/ajinkya.png",
                    position: "top-52 right-80",
                }
            ],
        },

        // ▶ Project 2 — Row 1
        {
            id: 102,
            name: "StudyNotion Ed-Tech Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-40",
            windowPosition: "top-[12vh] left-6",
            children: [
                {
                    id: 205,
                    name: "StudyNotion Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "StudyNotion is a full-stack Ed-Tech platform enabling students to learn through interactive courses.",
                        "Includes dashboards, authentication, and course management.",
                    ],
                },
                {
                    id: 206,
                    name: "studynotion.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://study-notion-frontend-ivory-eta.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 207,
                    name: "studynotion.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: "/images/StudyNotion.png",
                    position: "top-52 right-80",
                }
            ],
        },

        // ▶ Project 3 — Row 1
        {
            id: 103,
            name: "Shortcut Blogging Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-[70%]",
            children: [
                {
                    id: 209,
                    name: "Shortcut Blog Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A full-stack blogging platform with authentication and dynamic content rendering.",
                        "Built with Next.js, Node, Express, MongoDB.",
                    ],
                },
                {
                    id: 210,
                    name: "shortcut-blog.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://blog-app-frontend-attack-capital.vercel.app/",
                    position: "top-15 right-20",
                },
                {
                    id: 211,
                    name: "shortcut.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: "/images/blog.png",
                    position: "top-52 right-80",
                }
            ],
        },

        // ▶ Project 4 — Row 1
        {
            id: 104,
            name: "Kanban Task Management Tool",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-[90%]",
            children: [
                {
                    id: 213,
                    name: "Kanban Project.txt",
                    icon: "/images/txt.png",
                    fileType: "txt",
                    kind: "file",
                    position: "top-5 left-10",
                    description: [
                        "Kanban-style MERN task manager with drag-and-drop boards.",
                        "Responsive UI with Tailwind CSS.",
                    ],
                },
                {
                    id: 214,
                    name: "kanban.com",
                    icon: "/images/safari.png",
                    fileType: "url",
                    kind: "file",
                    href: "https://project-management-task-y2np.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 215,
                    name: "kanban.png",
                    icon: "/images/image.png",
                    fileType: "img",
                    kind: "file",
                    imageUrl: "/images/kanban.png",
                    position: "top-52 right-80",
                }
            ],
        },

        // ▶ Project 5 — Row 2
        {
            id: 105,
            name: "Akatsuki Coding Club Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-[32vh] left-5",
            children: [
                {
                    id: 217,
                    name: "Akatsuki Website.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Official Akatsuki coding club website built using React, TypeScript & Tailwind.",
                    ],
                },
                {
                    id: 218,
                    name: "akatsuki.com",
                    icon: "/images/safari.png",
                    fileType: "url",
                    kind: "file",
                    href: "https://akatsuki.rcpit.ac.in/",
                    position: "top-15 right-20",
                },
                {
                    id: 219,
                    name: "akatsuki.png",
                    icon: "/images/image.png",
                    fileType: "img",
                    kind: "file",
                    imageUrl: "/images/akatsuki.png",
                    position: "top-52 right-80",
                }
            ],
        },

        // ▶ Project 6 — Row 2
        {
            id: 106,
            name: "Akatsuki Connect",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-[32vh] left-40",
            children: [
                {
                    id: 221,
                    name: "Akatsuki Connect.txt",
                    icon: "/images/txt.png",
                    fileType: "txt",
                    kind: "file",
                    position: "top-5 left-10",
                    description: [
                        "Student networking and communication platform built with React.",
                    ],
                },
                {
                    id: 222,
                    name: "connect.com",
                    icon: "/images/safari.png",
                    fileType: "url",
                    kind: "file",
                    href: "https://akatsuki-connect.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 223,
                    name: "connect.png",
                    icon: "/images/image.png",
                    fileType: "img",
                    kind: "file",
                    imageUrl: "/images/connect.png",
                    position: "top-52 right-80",
                }
            ],
        },

        // ▶ Project 8 — Row 2
        {
            id: 108,
            name: "React Blog Application",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-[32vh] left-[90%]",
            children: [
                {
                    id: 229,
                    name: "React Blog.txt",
                    icon: "/images/txt.png",
                    fileType: "txt",
                    kind: "file",
                    position: "top-5 left-10",
                    description: [
                        "Simple blogging UI built with React + Tailwind.",
                    ],
                },
                {
                    id: 230,
                    name: "reactblog.com",
                    icon: "/images/safari.png",
                    fileType: "url",
                    kind: "file",
                    href: "https://blog-website-using-react.vercel.app/",
                    position: "top-15 right-20",
                },
                {
                    id: 231,
                    name: "reactblog.png",
                    icon: "/images/image.png",
                    fileType: "img",
                    kind: "file",
                    imageUrl: "/images/ReactBlog.png",
                    position: "top-52 right-80",
                }
            ],
        },

      

        // ▶ Project 10 — Row 3
        {
            id: 110,
            name: "E-commerce React",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-[58vh] left-40",
            children: [
                {
                    id: 237,
                    name: "Ecommerce React.txt",
                    icon: "/images/txt.png",
                    fileType: "txt",
                    kind: "file",
                    position: "top-5 left-10",
                    description: [
                        "Modern e-commerce UI built using React + Redux.",
                    ],
                },
                {
                    id: 238,
                    name: "ecommerce.com",
                    icon: "/images/safari.png",
                    fileType: "url",
                    kind: "file",
                    href: "https://e-commerce-react-redux-alpha.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 239,
                    name: "ecommerce.png",
                    icon: "/images/image.png",
                    fileType: "img",
                    kind: "file",
                    imageUrl: "/images/E-commerce.png",
                    position: "top-52 right-80",
                }
            ],
        },

      
    ],
};




const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/paresh.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/paresh.png",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/paresh-casual.jpg",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/paresh-casual.jpg",
        },
        {
            id: 3,
            name: "exploring-me.jpg",
            icon: "/images/paresh-3.jpg",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/paresh-3.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/paresh.png",
            description: [
                "Hey! I’m Paresh 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
                "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
                "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
                "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    portfolio: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    web:      { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },


};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };