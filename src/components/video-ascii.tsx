"use client";

import { useRef, useEffect, useState, createRef } from "react";
import { ASCII_CHARS } from "@/constants";
import { ArtType } from "@/types";
import {
  calculateApplyFontSize,
  canvasImgToUrl,
  getAsciiFromImage,
  getAsciiFromImageColor,
  lineHeight,
  lineSpacing,
  // videoImgToUrl,
} from "@/utils";

type VideoAsciiProps = {
  videoStreaming: HTMLVideoElement;
  parentRef: React.RefObject<HTMLElement>;
  charsPerLine: number;
  charsPerColumn: number;
  fontColor: string;
  backgroundColor: string;
  artType: ArtType;
  flipY?: boolean;
  preTagRef?: React.RefObject<HTMLPreElement | null>;
};

export const VideoAscii = ({
  videoStreaming,
  parentRef,
  charsPerLine,
  charsPerColumn,
  fontColor,
  backgroundColor,
  artType,
  flipY = false,
  preTagRef = createRef<HTMLPreElement>(),
}: VideoAsciiProps) => {
  const canvasVideoBufferRef = useRef<HTMLCanvasElement | null>(null);
  const [asciiText, setAsciiText] = useState<string>("");

  // useEffect to calculate the font size and set the resize observer (to resize the canvas and the font size, when the parent element is resized)
  useEffect(() => {
    calculateApplyFontSize({
      preTag: preTagRef.current!,
      charsPerLine: charsPerLine,
      charsPerColumn: charsPerColumn,
      parentWidth: parentRef.current.clientWidth,
      parentHeight: parentRef.current.clientHeight,
    });

    // Set a resize observer to the parent element to resize the canvas and the font size
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      calculateApplyFontSize({
        preTag: preTagRef.current!,
        charsPerLine,
        charsPerColumn,
        parentWidth: width,
        parentHeight: height,
      });
    });
    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    // Stop the resize observer when the component is unmounted
    return () => {
      resizeObserver.disconnect();
    };
  }, [videoStreaming, parentRef, charsPerLine, charsPerColumn, artType]);

  // UseEffect to draw the video to the canvas buffer and get the ascii from the canvas buffer on every frame
  useEffect(() => {
    const canvas = canvasVideoBufferRef.current!;
    const context = canvas.getContext("2d", { willReadFrequently: true })!;

    // Animation frame id
    let animationFrameId: number;

    // Refresh the ascii art text every frame
    const updateAscii = () => {
      // Draw video to canvas buffer

      context.drawImage(videoStreaming, 0, 0, canvas.width, canvas.height);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

      switch (artType) {
        case ArtType.ASCII:
          setAsciiText(getAsciiFromImage(imageData, ASCII_CHARS));
          break;
        case ArtType.ASCII_COLOR:
          setAsciiText(getAsciiFromImageColor(imageData, ASCII_CHARS));
          break;
        case ArtType.ASCII_COLOR_BG_IMAGE:
          setAsciiText(getAsciiFromImage(imageData, ASCII_CHARS));
          // Set the background image of the pre tag to the resized canvas
          preTagRef.current!.style.backgroundImage = `url(${canvasImgToUrl(canvas).src})`;
          // // Set the background image of the pre tag to the original dimensions video
          // preTagRef.current!.style.backgroundImage = `url(${videoImgToUrl(videoStreaming).src})`;
          break;
        default:
          break;
      }

      // Schedule the next frame
      animationFrameId = requestAnimationFrame(updateAscii);
    };

    // Start the animation loop when the component mounts
    updateAscii();

    // Stop the animation loop when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [videoStreaming, artType]);

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <canvas
        ref={canvasVideoBufferRef}
        width={charsPerLine}
        height={charsPerColumn}
        style={{ display: "none" }}
      />
      {(() => {
        switch (artType) {
          case ArtType.ASCII:
            return (
              <pre
                ref={preTagRef}
                style={{
                  backgroundColor: backgroundColor,
                  color: fontColor,
                  padding: 0,
                  margin: 0,
                  letterSpacing: `${lineSpacing}em`,
                  lineHeight: `${lineHeight}em`,
                  transform: `scaleX(${flipY ? -1 : 1})`,
                  overflow: "hidden",
                }}
              >
                {asciiText}
              </pre>
            );
          case ArtType.ASCII_COLOR:
            return (
              <pre
                ref={preTagRef}
                dangerouslySetInnerHTML={{ __html: asciiText }}
                style={{
                  backgroundColor: backgroundColor,
                  color: fontColor,
                  padding: 0,
                  margin: 0,
                  letterSpacing: `${lineSpacing}em`,
                  lineHeight: `${lineHeight}em`,
                  transform: `scaleX(${flipY ? -1 : 1})`,
                  overflow: "hidden",
                }}
              ></pre>
            );
          case ArtType.ASCII_COLOR_BG_IMAGE:
            return (
              <span>
                {/*
                                        This span is important for the browser, it helps differentiate
                                        the other pre tag from the one with the background image when
                                        toggling the artType. If the pre tag is not present, the browser
                                        might think that the change of pre tag is an update not a replace
                                         */}
                <pre
                  ref={preTagRef}
                  style={{
                    padding: 0,
                    margin: 0,
                    letterSpacing: `${lineSpacing}em`,
                    lineHeight: `${lineHeight}em`,
                    backgroundSize: "100% 100%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    transform: `scaleX(${flipY ? -1 : 1})`,
                    overflow: "hidden",
                  }}
                >
                  {asciiText}
                </pre>
              </span>
            );
          default:
            return <p>ERROR</p>;
        }
      })()}
    </div>
  );
};
