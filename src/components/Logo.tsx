interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-8" }: LogoProps) {
  return (
    <img
      src="/unlocky-logo.png"
      alt="Unlocky Logo"
      className={`${className} flex-shrink-0 object-contain`}
    />
  );
}

export default Logo;
