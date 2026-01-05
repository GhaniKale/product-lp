"use client";

import { useEffect, useMemo, useState } from "react";
import { Timer } from "lucide-react";

type CountdownTimerProps = {
  durationHours?: number;
};

function formatNumber(value: number) {
  return value.toString().padStart(2, "0");
}

export default function CountdownTimer({ durationHours = 36 }: CountdownTimerProps) {
  const endTimestamp = useMemo(() => Date.now() + durationHours * 60 * 60 * 1000, [durationHours]);
  const [remainingMs, setRemainingMs] = useState(endTimestamp - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingMs((current) => {
        if (current <= 1000) return 0;
        return current - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const totalSeconds = Math.max(0, Math.floor(remainingMs / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
      <Timer className="h-4 w-4 text-amber-200" />
      <span className="font-semibold tracking-wide">Berakhir dalam</span>
      <span className="rounded-full bg-white/15 px-3 py-1 font-mono text-sm">
        {formatNumber(hours)}:{formatNumber(minutes)}:{formatNumber(seconds)}
      </span>
    </div>
  );
}
