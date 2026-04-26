"use client";

import { useEffect, useState } from "react";
import { KsolLogo } from "./KsolLogo";

const activityItems = [
  "Internal transfer executed",
  "Liquidity rebalance",
  "System sync completed",
  "Reference model refreshed",
];

const statusItems = ["System Operational", "Peg Stable", "Reserve Model Active"];

function formatReference(value: number) {
  return value.toFixed(4);
}

export function LivePriceModule() {
  const [referenceValue, setReferenceValue] = useState(1);
  const [activityIndex, setActivityIndex] = useState(0);
  const [utilization, setUtilization] = useState(63.8);

  const nextActivity = activityItems[activityIndex % activityItems.length];
  const updatedAt = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());

  useEffect(() => {
    const priceTimer = window.setInterval(
      () => {
        setReferenceValue(1 + (Math.random() * 0.002 - 0.001));
        setUtilization(63.8 + (Math.random() * 1.2 - 0.6));
      },
      2400 + Math.random() * 1200,
    );

    const activityTimer = window.setInterval(() => {
      setActivityIndex((current) => current + 1);
    }, 3600);

    return () => {
      window.clearInterval(priceTimer);
      window.clearInterval(activityTimer);
    };
  }, []);

  return (
    <div className="system-float rounded-[28px] bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-white/[0.018] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <KsolLogo size={40} />
          <div>
            <p className="text-sm font-medium uppercase text-neutral-500">
              Price Reference
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Reference model v1.0
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white/[0.055] px-3 py-1.5 text-xs text-neutral-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <span className="size-1.5 rounded-full bg-neutral-300 opacity-80" />
          Live
        </div>
      </div>

      <div className="mt-8 border-y border-white/[0.07] py-8">
        <p className="text-4xl font-semibold text-white">
          1 KSOL {"\u2248"} {formatReference(referenceValue)} SOL
        </p>
        <p className="mt-4 text-sm leading-6 text-neutral-400">
          KSOL/USD follows SOL/USD reference price.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-black/25 p-4">
          <p className="text-[11px] uppercase text-neutral-500">
            Reference Pair
          </p>
          <p className="mt-1 font-mono text-sm text-neutral-200">SOL/USD</p>
        </div>
        <div className="rounded-2xl bg-black/25 p-4">
          <p className="text-[11px] uppercase text-neutral-500">Peg Target</p>
          <p className="mt-1 font-mono text-sm text-neutral-200">1.00</p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-black/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs uppercase text-neutral-500">
            Reserve Utilization
          </p>
          <p className="font-mono text-xs text-neutral-300">
            {utilization.toFixed(1)}%
          </p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-neutral-500 via-neutral-300 to-neutral-500 transition-all duration-1000 ease-out"
            style={{ width: `${utilization}%` }}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        {statusItems.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-full bg-white/[0.035] px-4 py-2 text-xs text-neutral-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            <span>{item}</span>
            <span className="size-1.5 rounded-full bg-neutral-300 opacity-70" />
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-black/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs uppercase text-neutral-500">Recent Activity</p>
          <p className="font-mono text-[11px] text-neutral-600">{updatedAt}</p>
        </div>
        <p
          key={nextActivity}
          className="mt-3 text-sm text-neutral-300 opacity-80 transition-opacity duration-500"
        >
          {nextActivity}
        </p>
      </div>

      <p className="mt-5 text-xs leading-5 text-neutral-500">
        Static placeholder. Future versions may connect to an official reference
        API.
      </p>
    </div>
  );
}
