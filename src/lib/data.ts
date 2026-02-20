export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string;
    imageUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description: "A comprehensive e-commerce solution with product management, cart functionality, and payment integration. Built for scalability and performance.",
        techStack: "Next.js, TypeScript, Stripe",
        imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com",
        demoUrl: "https://demo.com"
    },
    {
        id: "2",
        title: "Task Management App",
        description: "A productivity tool for teams to organize tasks, track progress, and collaborate efficiently. Features real-time updates.",
        techStack: "React, Firebase, Tailwind",
        imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com",
        demoUrl: "https://demo.com"
    },
    {
        id: "3",
        title: "Finance Dashboard",
        description: "Analytical dashboard for visualizing financial data. Includes interactive charts and report generation capabilities.",
        techStack: "Vue.js, D3.js, Node.js",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com",
        demoUrl: "https://demo.com"
    },
    {
        id: "4",
        title: "Social Media API",
        description: "Backend API for a social networking platform. Handles user authentication, posts, comments, and relationships.",
        techStack: "Go, PostgreSQL, Redis",
        imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com",
        demoUrl: "https://demo.com"
    },
    {
        id: "5",
        title: "Weather Forecast",
        description: "real-time weather application providing accurate forecasts using third-party meteorological APIs.",
        techStack: "JavaScript, OpenWeatherMap",
        imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://github.com",
        demoUrl: "https://demo.com"
    }
];
