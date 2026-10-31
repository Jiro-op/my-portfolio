import { profile } from "../data/profile.js";

function linkProps(item) {
  const isWebLink = item.url.startsWith("http");
  return {
    href: item.url,
    target: isWebLink ? "_blank" : undefined,
    rel: isWebLink ? "noopener noreferrer" : undefined,
  };
}

function SocialLinks({ heading, compact = false }) {
  const items = (profile.socials ?? []).filter((item) => item.url);

  if (items.length === 0) {
    return null;
  }

  if (compact) {
    return (
      <div className="social-links">
        {heading && <p className="eyebrow">{heading}</p>}
        <ul className="social-inline">
          {items.map((item) => (
            <li key={item.label}>
              <a {...linkProps(item)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="social-links">
      {heading && <h3>{heading}</h3>}
      <ul className="social-list">
        {items.map((item) => (
          <li key={item.label}>
            <a {...linkProps(item)}>
              <span className="social-text">
                <span className="social-name">{item.label}</span>
                <span className="social-handle">
                  {item.handle || item.url.replace(/^https?:\/\/(www\.)?/, "")}
                </span>
              </span>
              <span className="social-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;