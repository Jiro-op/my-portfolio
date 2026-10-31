import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";


function Projects() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");
    const [type, setType] = useState("All");
    const [year, setYear] = useState("All");

    const categories = ["All", ...new Set(projects.map((p) => p.category))];
    const types = ["All", ...new Set(projects.map((p) => p.type))];
    const years = [...new Set(projects.map((p) => p.year))].sort((a, b) => b -a);

    const search = query.trim().toLowerCase();

    const results = projects.filter((p) => {
        const searchableText = [p.name, p.category, p.type, p.year, ...p.technologies]
        .join(" ")
        .toLowerCase();

        return (
            searchableText.includes(search) &&
            (category === "All" || p.category === category) &&
            (type === "All" || p.type === type) &&
            (year === "All" || String(p.year) === year)
        );
    });

    function clearFilters() {
        setQuery("");
        setCategory("All");
        setType("All");
        setYear("All");
    }

    return (
        <section className="container section">
            <p className="eyebrow">Selected work</p>
            <h1>Projects</h1>

            <div className="filters">
                <label className="filter filter-search">
                    <span>Search</span>
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Name, tool, category, year..."
                    />    
                </label>

                <label className="filter">
                    <span>Category</span>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        {categories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </label>

                <label className="filter">
                    <span>Type</span>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        {types.map((t) =>(
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </label>

                <label className="filter">
                    <span>Year</span>
                    <select value={year} onChange={(e) => setYear(e.target.value)}>
                        <option value="All">All</option>
                        {years.map((y) => (
                            <option key={y} value={String(y)}>{y}</option>
                        ))}
                    </select>
                </label>
            </div>

            <div className="results-bar">
                <p className="muted" aria-live="polite">
                    Showing {results.length} of {projects.length} projects
                </p>
                <button type="button" className="link-button" onClick={clearFilters}>
                    Clear filters
                </button>
            </div>

            <h2 className="sr-only">Project list</h2>
            {results.length > 0 ? (
                <div className="project-grid">
                    {results.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                ) : (
                    <p>No projects match your search. Try clearing the filters.</p>
                )}
        </section>
    );  
}

export default Projects;