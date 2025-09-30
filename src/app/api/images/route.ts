import { type NextRequest, NextResponse } from "next/server";
import { Image } from "@/types";

export async function GET(req: NextRequest) {
  if (
    req.headers.get("authorization") !== process.env.NEXT_PUBLIC_RANDOM_STRING
  ) {
    return NextResponse.json(
      { message: "unauthorized", data: null },
      { status: 401 }
    );
  }

  try {
    const collections = await fetch(
      "https://api.pexels.com/v1/collections?page=1",
      {
        method: "GET",
        headers: {
          Authorization: `${process.env.PEXELS_API_KEY}`,
        },
      }
    );

    const data = await collections.json();

    let images: Image[] = [];
    for (let i = 0; i < data.collections.length; i++) {
      const collection = await fetch(
        `https://api.pexels.com/v1/collections/${data.collections[i].id}?page=1&sort=desc`,
        {
          method: "GET",
          headers: {
            Authorization: `${process.env.PEXELS_API_KEY}`,
          },
        }
      );

      const collectionData = await collection.json();
      images = [...images, ...collectionData.media];
    }

    return NextResponse.json(
      { message: "cari apa?", data: images },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "failed to fetch images", data: null },
      { status: 500 }
    );
  }
}
