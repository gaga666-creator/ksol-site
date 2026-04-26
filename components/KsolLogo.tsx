type KsolLogoProps = {
  size?: number;
  className?: string;
};

export function KsolLogo({ size = 48, className = "" }: KsolLogoProps) {
  return (
    <div
      aria-label="KSOL logo"
      className={`relative grid aspect-square shrink-0 place-items-center overflow-hidden rounded-full border border-[#a8a8a8]/80 bg-[#030303] shadow-[inset_0_1px_10px_rgba(255,255,255,0.10),inset_0_-10px_24px_rgba(255,255,255,0.04)] ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-[7%] rounded-full border border-white/10" />
      <span className="relative flex h-[34%] w-[60%] flex-col justify-between">
        <span className="h-[22%] skew-x-[-20deg] rounded-full bg-gradient-to-r from-[#777777] via-[#f3f3ef] to-[#6b6b6b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.42)]" />
        <span className="h-[22%] skew-x-[-20deg] rounded-full bg-gradient-to-r from-[#8b8b8b] via-[#ffffff] to-[#747474] shadow-[inset_0_1px_1px_rgba(255,255,255,0.48)]" />
        <span className="h-[22%] skew-x-[-20deg] rounded-full bg-gradient-to-r from-[#777777] via-[#e8e8e3] to-[#666666] shadow-[inset_0_1px_1px_rgba(255,255,255,0.38)]" />
      </span>
    </div>
  );
}
