import { useEffect } from "react";
import { useLocation } from "react-router";
import { profile } from "../data/profile.js";
import { projects } from "../data/projects.js";
import { SITE_URL } from "../siteConfig.js";

const name = profile.name;
const role = profile.title;

// The title and description for each page. Edit the words here.
const pages = {
  "/": {
    title: name + " | " + role + " Portfolio",
    description: role + " portfolio of " + name + ". " + profile.tagline,
  },
  "/about": {
    title: "About | " + name,
    description: "About " + name + ": background, education, and areas of specialization.",
  },
  "/skills": {
    title: "Skills | " + name,
    description: "Design tools and professional skills of " + name + ".",
  },
  "/experience": {
    title: "Experience | " + name,
    description: "Experience, responsibilities, and accomplishments of " + name + ".",
  },
  "/projects": {
    title: "Projects | " + name,
    description: "Selected design projects by " + name + ": logos, posters, branding, and more.",
  },
  "/education": {
    title: "Education and Credentials | " + name,
    description: "Education and certifications of " + name + ".",
  },
  "/cv": {
    title: "CV | " + name,
    description: "View or download the latest CV of " + name + ".",
  },
  "/contact": {
    title: "Contact | " + name,
    description: "Get in touch with " + name + " about design projects.",
  },
};

function setMeta(attr, key, content) {
  let tag = document.head.querySelector("meta[" + attr + '="' + key + '"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href) {
  let tag = document.head.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

    let page = pages[path];
    let image = "/og-image.jpg";
    let noindex = false;

    if (!page && path.startsWith("/projects/")) {
      const project = projects.find((p) => "/projects/" + p.slug === path);
      if (project) {
        page = {
          title: project.name + " | " + name,
          description: project.description,
        };
        if (project.image) {
          image = project.image;
        }
      }
    }

    if (!page) {
      page = {
        title: "Page not found | " + name,
        description: "This page does not exist.",
      };
      noindex = true;
    }

    const url = SITE_URL + path;
    const imageUrl = image.startsWith("http") ? image : SITE_URL + image;

    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setCanonical(url);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setMeta("name", "twitter:image", imageUrl);
  }, [pathname]);

  return null;
}

export default Seo;