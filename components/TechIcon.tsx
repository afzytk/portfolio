import Image from "next/image";

type TechIconProps = {
  name: string;
  size?: number;
  className?: string;
};

const devicon = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`;

// simple-icons SVGs use currentColor (renders black via <img>), so pin an explicit
// brand color via the iconify API to keep them visible on the dark theme.
const simpleIcon = (icon: string, color: string) =>
  `https://api.iconify.design/simple-icons/${icon}.svg?color=${encodeURIComponent(color)}`;

/**
 * Maps a skill/stack name to its logo URL. Sources:
 * - devicon (https://github.com/devicons/devicon) for languages, frameworks and tools
 * - simple-icons (https://github.com/simple-icons/simple-icons) for services without a devicon entry (GSAP, Clerk, BetterAuth)
 */
const techIcons: Record<string, string> = {
  JavaScript: devicon("javascript"),
  TypeScript: devicon("typescript"),
  Python: devicon("python"),
  "React.js": devicon("react"),
  "Next.js": devicon("nextjs"),
  "Tailwind CSS": devicon("tailwindcss"),
  "Node.js": devicon("nodejs"),
  "Express.js": simpleIcon("express", "#ffffff"),
  PostgreSQL: devicon("postgresql"),
  Git: devicon("git"),
  GitHub: simpleIcon("github", "#ffffff"),
  LinkedIn: simpleIcon("linkedin", "#0A66C2"),
  Figma: devicon("figma"),
  Supabase: devicon("supabase"),
  GSAP: simpleIcon("gsap", "#0AE448"),
  Clerk: simpleIcon("clerk", "#6C47FF"),
  BetterAuth: simpleIcon("betterauth", "#ffffff"),
};

export const TechIcon = ({ name, size = 20, className = "" }: TechIconProps) => {
  const src = techIcons[name];

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={size}
      height={size}
      unoptimized
      className={className}
    />
  );
};
