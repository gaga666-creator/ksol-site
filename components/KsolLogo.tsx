import Image from "next/image";

type KsolLogoProps = {
  size?: number;
  className?: string;
};

export function KsolLogo({ size = 48, className = "" }: KsolLogoProps) {
  return (
    <Image
      src="/token/ksol-logo.png"
      alt="KSOL logo"
      width={size}
      height={size}
      priority={size >= 72}
      className={`aspect-square shrink-0 rounded-full object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
