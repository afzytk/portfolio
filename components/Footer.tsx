const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/afsaltk/" },
  { name: "GitHub", href: "https://github.com/afzytk" },
];

export const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-neutral-800">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40%] h-40 bg-green-500/20 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex gap-3 ">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-sm font-medium bg-neutral-800 text-neutral-200 rounded-full hover:bg-green-500 hover:text-white transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-800 py-4">
        <p className="text-center text-xs text-neutral-500">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
