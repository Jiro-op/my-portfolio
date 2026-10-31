
export const profile = {
    name: "Julian Renz M. Zoleta",
    title: "Freelance Photographer / Web Developer",
    tagline: "Capturing Moments, Creating Stories.",
    intro: "I am a freelance photographer with a strong background in front-end web development, combining technical precision with an eye for compelling visual storytelling. Having spent two years building clean, responsive digital experiences, I bring a unique understanding of composition, lighting, and layout to every shoot. My focus is on crafting clean, high-impact imagery that elevates brands, captures authentic moments, and seamlessly translates across both print and digital platforms.",
    photo: "/profile/profile.jpg",
    cv: "/files/Julian Renz.pdf",
    location: "Calamba City, Philippines",
    email: "zoletajulianrenz@gmail.com",
    phone: "+63 968 438 4838",
    education: "City College of Calamba, Bachelor of Science in Information Technology",
    occupation: "Student /  Freelance Photographer / Web Developer",
    experienceYears: "April 2026 - Present",
    specializations: [
        "Portrait Photography",
        "Landscape Photography",
        "Street Photography",
        "Event Photography",
        "Front-End Developer",
    ],
    bio: [
        "My creative path began in front-end development, where I spent two years crafting user interfaces and honing a sharp eye for visual balance and detail. That technical foundation naturally drew me behind the camera, inspiring me to transition into freelance photography in early 2026. Today, I leverage both disciplines to approach visual storytelling with both artistic intuition and meticulous technical execution.",
        "Whether working on corporate branding, commercial projects, or personal portraiture, my goal is to deliver imagery that speaks clearly and authentically. My experience in web structure allows me to shoot with the end product in mind creating assets that integrate seamlessly into modern marketing campaigns and digital media. I am currently available for full-time photography roles, client commissions, and creative collaborations.",
    ],
    socials: [
        {label: "Email", url:"zoletajulianrenz@gmail.com"},
        {label: "GitHub", url:"https://github.com/Jiro-op/"},
    ],
};

export const cvFileName =
    profile.name.replace(/[^a-z0-9]+/gi, "_").replace(/^|-$/g, "") + "-Julian Renz.pdf";