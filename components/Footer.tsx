export const Footer = () => {
  return (
    <footer className="relative mt-8 border-t border-neutral-800">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40%] h-40 bg-accent/20 blur-[100px] pointer-events-none -z-10" />

      <div className="border-t border-neutral-800 py-4">
        <p className="text-center text-xs text-neutral-400">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
