import { profile } from "../data/profile.js";

function SocialLinks({ heading }) {
    const items = (profile.socials ?? []).filter((item) => item.url);

    if (items.length === 0) {
        return null;
    }

    return (
        <div className="social-links">
            {heading && <h3>{heading}</h3>}
            <ul className="social-list">
                {items.map((item) => {
                    const isWebLink = item.url.startsWith("http");
                    return (
                        <li key={item.label}>
                            <a
                              href={item.url}
                              target={isWebLink ? "_blank" : undefined}
                              rel={isWebLink ? "noopener noreferrer" : undefined}
                            >
                             <span className="social-text">
                                <span className="social-name">{item.label}</span>
                                <span className="social-handle">
                                    {item.handle || item.url.replace(/^https?:\/\/(www\.)?/,"")}
                                </span>
                             </span>
                             <span className="social-arrow" aria-hidden="true">↗</span>
                          </a>  
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SocialLinks;