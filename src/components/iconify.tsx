"use client";

import React from "react";
import { Icon, IconProps } from "@iconify/react/dist/iconify.js";

const Iconify = (props: IconProps) => {
  const { color = "white", fontSize = "0.75rem", style, ...rest } = props;
  const [isLoading, setIsLoading] = React.useState(true);

  const mergedStyle = React.useMemo<React.CSSProperties>(
    () => ({ flexShrink: 0, ...(style as React.CSSProperties | undefined) }),
    [style],
  );

  const placeholderStyle = React.useMemo<React.CSSProperties>(
    () => ({
      ...mergedStyle,
      width: fontSize,
      height: fontSize,
      backgroundColor: color === "white" ? "#ffffff" : color,
      opacity: 0.2,
      borderRadius: "8px",
      animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    }),
    [mergedStyle, fontSize, color],
  );

  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes pulse {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.8; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const handleLoad = React.useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = React.useCallback(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <>
        <div style={placeholderStyle} />
        <Icon
          color={color}
          fontSize={fontSize}
          style={{ ...mergedStyle, visibility: "hidden" }}
          onLoad={handleLoad}
          onError={handleError}
          {...rest}
        />
      </>
    );
  }

  return (
    <Icon color={color} fontSize={fontSize} style={mergedStyle} {...rest} />
  );
};

export default React.memo(Iconify);
