import { skillCategories } from "../data/skills.js";

function Skills() {
    return (
        <section className="container section">
            <p className="eyebrow">Skills</p>
            <h1>What I do best</h1>
            
            <div className="card-grid">
                {skillCategories.map((category) =>(
                    <article key={category.title} className="card">
                        <h3>{category.title}</h3>
                        <ul className="chips">
                            {category.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Skills;