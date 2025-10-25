import { useRef, useState, useEffect, useCallback } from "react";
import { VideoAscii } from "@/components/video-ascii";
import { ArtType } from "@/types";
import "./video-controller.scss";
import "./video-view-panel.scss";
import useHome from "../_hooks/useHome";
import Iconify from "@/components/iconify";

interface VideoHandlerRef {
  ejectVideo: () => void;
}

const HomeVideoSection = () => {
  const { states, handlers } = useHome();

  const refVideoHandler = useRef<VideoHandlerRef | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const divVideoAsciiParentRef = useRef<HTMLDivElement | null>(null);
  const preTagRef = useRef<HTMLPreElement | null>(null);

  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const [charsPerLine, setCharsPerLine] = useState<number>(150);
  const [charsPerColumn, setCharsPerColumn] = useState<number>(150);
  const [useAutoAspectRatio, setUseAutoAspectRatio] = useState<boolean>(true);
  const [manualCharsPerLine, setManualCharsPerLine] = useState<number>(150);
  const [manualCharsPerColumn, setManualCharsPerColumn] = useState<number>(150);
  const [autoResolutionBase, setAutoResolutionBase] = useState<number>(100);
  const [useLineBase, setUseLineBase] = useState<boolean>(false);

  // Initialize with safe default values
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const videoUrl = "/tenki-no-ko.mp4";
  const replayOnEnd = true;
  const autoPlay = true;

  const calculateCharsPerLine = (video: HTMLVideoElement) =>
    Math.round(autoResolutionBase * (video.videoWidth / video.videoHeight));
  const calculateCharsPerColumn = (video: HTMLVideoElement) =>
    Math.round(autoResolutionBase * (video.videoHeight / video.videoWidth));

  const onCanPlay = () => {
    setIsVideoReady(true);
  };

  const onEjectVideo = () => {
    setIsVideoReady(false);
    if (videoRef.current) {
      videoRef.current.src = "";
    }
    refVideoHandler.current?.ejectVideo();
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
    } catch (err: unknown) {
      console.error("Failed to copy text: ", err);
    }
  };

  /* On user video buttons events */
  const togglePausePlay = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  /* On user video event */
  const handleVideoCursorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (videoRef.current) {
      videoRef.current.currentTime = value;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;

    videoRef.current.volume = parseFloat(e.target.value);
    setVolume(parseFloat(e.target.value));
  };

  /* Video events */
  const onVideoEnded = useCallback(async () => {
    if (!videoRef.current) return;

    if (replayOnEnd) {
      await videoRef.current.play();
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  }, [replayOnEnd]);

  const onVideoTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime ?? 0);
    }
  }, []);

  // Properly handle video events with useEffect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => onVideoEnded();
    const handleTimeUpdate = () => onVideoTimeUpdate();
    const handleLoadedData = () => {
      // Update state when video is loaded
      setIsPaused(video.paused);
      setIsMuted(video.muted);
      setVolume(video.volume);
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [onVideoEnded, onVideoTimeUpdate]);

  return (
    <div>
      {videoUrl && isVideoReady ? (
        <div>
          <video
            ref={videoRef}
            src={videoUrl}
            style={{
              width: 0,
              height: 0,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            onCanPlay={() => {
              if (!videoRef.current) return;

              if (useAutoAspectRatio) {
                setCharsPerLine(
                  useLineBase
                    ? autoResolutionBase
                    : calculateCharsPerLine(videoRef.current),
                );
                setCharsPerColumn(
                  useLineBase
                    ? calculateCharsPerColumn(videoRef.current)
                    : autoResolutionBase,
                );
              } else {
                setCharsPerLine(manualCharsPerLine);
                setCharsPerColumn(manualCharsPerColumn);
              }

              onCanPlay();
            }}
            autoPlay={autoPlay}
          />
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <button
            className="hover:underline cursor-pointer"
            onClick={() => setIsVideoReady(true)}
          >
            let me in!
          </button>
        </div>
      )}
      {isVideoReady && videoRef.current && (
        <>
          <div className={"video-ascii-panel"}>
            <div className={"video-ascii-controller-holder"}>
              <div className={"video-controller-panel"}>
                <button
                  className={`button-play-pause ${isPaused ? "" : "paused"}`}
                  onClick={togglePausePlay}
                />
                <Iconify
                  icon={isPaused ? "tabler:player-play" : "tabler:player-pause"}
                  fontSize={32}
                  className="cursor-pointer hover:opacity-90"
                  onClick={togglePausePlay}
                />
                <input
                  type="range"
                  className={"slider-video-position"}
                  value={currentTime}
                  onChange={handleVideoCursorChange}
                  min={0}
                  max={videoRef.current?.duration || 0}
                />

                <Iconify
                  icon={isMuted ? "tabler:volume-off" : "tabler:volume"}
                  fontSize={32}
                  className="cursor-pointer hover:opacity-90"
                  onClick={toggleMute}
                />
                <input
                  type={"range"}
                  className={"slider-video-volume"}
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={handleVolumeChange}
                />
                <button
                  className={"button-eject-video"}
                  onClick={onEjectVideo}
                />
              </div>
            </div>
            <div ref={divVideoAsciiParentRef} className={"video-ascii-holder"}>
              <VideoAscii
                videoStreaming={videoRef.current}
                parentRef={
                  divVideoAsciiParentRef as React.RefObject<HTMLElement>
                }
                charsPerLine={charsPerLine}
                charsPerColumn={charsPerColumn}
                fontColor={"white"}
                backgroundColor={"black"}
                artType={
                  states.colored ? ArtType.ASCII_COLOR_BG_IMAGE : ArtType.ASCII
                }
                preTagRef={preTagRef}
              />
            </div>
          </div>
          <div>
            <div className="cursor-pointer w-fit hover:opacity-50 transition-opacity duration-500">
              <Iconify
                icon={"stash:copy-light"}
                fontSize={48}
                color="white"
                onClick={async () => {
                  if (preTagRef.current) {
                    await copyToClipboard(preTagRef.current.innerText);
                  }
                }}
              />
            </div>
            <div className="cursor-pointer w-fit hover:opacity-50 transition-opacity duration-500">
              <Iconify
                icon={"iconoir:color-wheel"}
                fontSize={32}
                color="white"
                onClick={() => handlers.setColored((prev) => !prev)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeVideoSection;
