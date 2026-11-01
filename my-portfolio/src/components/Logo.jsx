import { profile } from "../data/profile.js";

function getInitials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  const first = Array.from(parts[0])[0];
  const last = parts.length > 1 ? Array.from(parts[parts.length - 1])[0] : "";
  return (first + last).toUpperCase();
}

function Logo() {
  // His own logo file, if one is set in profile.js
  if (profile.logo) {
    const hasDarkVersion = Boolean(profile.logoDark);

    return (
      <>
        <img
          className={"logo-image" + (hasDarkVersion ? " logo-for-light" : "")}
          src={profile.logo}
          alt=""
          height="44"
        />
        {hasDarkVersion && (
          <img
            className="logo-image logo-for-dark"
            src={profile.logoDark}
            alt=""
            height="44"
          />
        )}
      </>
    );
  }

  // Otherwise, a monogram made from his initials
  const initials = getInitials(profile.name);

  return (
    <svg
      className="logo-mark"
      width="44"
      height="44"
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="logo-ring" cx="24" cy="24" r="22.5" />
      <circle className="logo-dot" cx="39.5" cy="8.5" r="2.8" />
      <text className="logo-initials" x="24" y="24" dy="0.33em" textAnchor="middle">
        {initials}
      </text>
    </svg>
  );
}

export default Logo;