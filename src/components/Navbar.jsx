import { Link } from "react-router-dom";
const navLinks = [
  { name: "Home", href: "#home", isExternal: false },
  { name: "Projects", href: "#projects", isExternal: false },
  { name: "Contact", href: "#contact", isExternal: false },
  { name: "GitHub", href: "https://github.com/afzytk", isExternal: true },
];

const Navbar = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50  bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-center">
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => {
            if (link.isExternal) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
