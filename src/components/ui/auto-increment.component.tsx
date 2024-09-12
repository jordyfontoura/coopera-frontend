"use client";

import useScrollTriggeredCountUp from "@/hooks/count-up";
import { useRef } from "react";


export interface IAutoIncrementProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
  duration?: number;
  maxTimes?: number;
}

export function AutoIncrement({duration, value, maxTimes, ...rest}: IAutoIncrementProps) {
  const countUpDuration = duration ?? 2_000;
  const valueScrollRef = useRef(null);
  const valueScroll = useScrollTriggeredCountUp(
    valueScrollRef,
    value,
    countUpDuration,
    maxTimes,
  );
  
  return (
    <span {...rest} ref={valueScrollRef}>{valueScroll}</span>
  );
}