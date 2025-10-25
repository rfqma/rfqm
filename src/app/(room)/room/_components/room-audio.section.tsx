import { forwardRef } from "react";

const RoomAudioSection = forwardRef<HTMLAudioElement>(
  function RoomAudioSection(_, ref) {
    return <audio ref={ref} src="/lone.mp3" loop />;
  },
);

export default RoomAudioSection;
