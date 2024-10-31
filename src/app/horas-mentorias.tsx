"use client"

import { AutoIncrement } from "@/components/ui/auto-increment.component";

export function HorasMentorias() {
  const horas = 500 + Math.floor((20 * 1 / 30) * (Date.now() - new Date("2024-10-31T18:28:14.051Z").getTime()) / (1000 * 60 * 60 * 24));
  return (
    <AutoIncrement duration={4_000} value={horas} maxTimes={1} />
  );
}