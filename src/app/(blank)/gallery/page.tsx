"use client";

import { useEffect, useState } from "react";
import { Gallery, Image } from "next-gallery";
import Link from "next/link";

interface ImageProps extends Image {
  pexels_url: string;
}

export default function Galleries() {
  const [images, setImages] = useState<ImageProps[]>([]);
  const [loading, setLoading] = useState(true);

  const widths = [500, 1000, 1600];
  const ratios = [2.2, 4, 6, 8];

  useEffect(() => {
    const getImages = async () => {
      const results = await fetch("/api/images", {
        method: "GET",
      });

      const data = await results.json();

      const src: ImageProps[] = data.images.map((image: any) => {
        return {
          src: image.src.large,
          aspect_ratio: image.width / image.height,
          pexels_url: image.url,
          alt: image.alt || "Image from Pexels",
          nextImageProps: {
            loading: "lazy",
          },
        };
      });
      setImages(src);
      setLoading(false);
    };

    getImages();
  }, []);

  if (loading) {
    return (
      <section className="flex min-h-screen md:items-center md:justify-center mt-10 md:mt-0 w-full">
        <div className="flex flex-col gap-10">
          <span className="text-sm">
            fetching images from pexels.com/@maruarchive...
          </span>
        </div>
      </section>
    );
  }

  return (
    <div className="flex flex-col gap-10 w-full relative">
      <Link
        href={"/"}
        className="absolute z-20 top-5 left-5 p-3 bg-custom-background text-custom-foreground cursor-pointer hover:opacity-70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="20"
          viewBox="0 0 16 9"
        >
          <path
            fill="currentColor"
            d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
          />
          <path
            fill="currentColor"
            d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
          />
        </svg>
      </Link>
      <Gallery
        widths={widths}
        ratios={ratios}
        images={images}
        lastRowBehavior="fill"
        overlay={(i) => {
          return (
            <Link
              href={images[i].pexels_url}
              target="_blank"
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
            >
              {/* <h1 className="text-white text-2xl">{i}</h1> */}
            </Link>
          );
        }}
      />
    </div>
  );
}
