"use client";

import { forwardRef } from "react";

const Audio = forwardRef<HTMLAudioElement>(function Audio(_, ref) {
  return <audio ref={ref} src="/lone.mp3" loop />;
});

export default Audio;
