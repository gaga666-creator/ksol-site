type KsolLogoProps = {
  size?: number;
  className?: string;
};

export function KsolLogo({ size = 48, className = "" }: KsolLogoProps) {
  return (
    <div
      aria-label="KSOL logo"
      className={`relative grid aspect-square shrink-0 place-items-center overflow-hidden rounded-full border border-[#d9d9d2]/80 bg-[radial-gradient(circle_at_29%_19%,rgba(255,255,255,0.26),transparent_22%),radial-gradient(circle_at_52%_64%,#191919,#020202_62%)] shadow-[inset_0_2px_12px_rgba(255,255,255,0.16),inset_0_-18px_32px_rgba(0,0,0,0.9),0_16px_42px_rgba(0,0,0,0.4)] ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-[5%] rounded-full border border-white/[0.09] shadow-[inset_0_1px_10px_rgba(255,255,255,0.09)]" />
      <span className="absolute left-[20%] top-[13%] h-[20%] w-[42%] rotate-[-18deg] rounded-full bg-white/[0.075] blur-[1px]" />
      <span className="absolute inset-[16%] rounded-full shadow-[inset_0_8px_16px_rgba(0,0,0,0.42)]" />
      <span className="relative flex h-[41%] w-[63%] flex-col justify-between">
        <span className="h-[29%] rounded-full bg-gradient-to-b from-[#ffffff] via-[#b9b9b2] to-[#5e5e5a] shadow-[inset_0_2px_2px_rgba(255,255,255,0.72),inset_0_-2px_2px_rgba(0,0,0,0.36),0_2px_3px_rgba(0,0,0,0.74)]" />
        <span className="h-[29%] rounded-full bg-gradient-to-b from-[#ffffff] via-[#c8c8c0] to-[#686864] shadow-[inset_0_2px_2px_rgba(255,255,255,0.78),inset_0_-2px_2px_rgba(0,0,0,0.36),0_2px_3px_rgba(0,0,0,0.76)]" />
        <span className="h-[29%] rounded-full bg-gradient-to-b from-[#ededE7] via-[#aaa9a1] to-[#575753] shadow-[inset_0_2px_2px_rgba(255,255,255,0.64),inset_0_-2px_2px_rgba(0,0,0,0.34),0_2px_3px_rgba(0,0,0,0.7)]" />
      </span>
    </div>
  );
}
