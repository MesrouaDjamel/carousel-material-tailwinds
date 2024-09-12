"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export function CarouselDefault() {
  return (
    <Carousel
      className="rounded-xl h-[500px] w-[500px]"
      placeholder={<div>Loading...</div>}
      onPointerEnterCapture={() => alert("onPointerEnterCapture")}
      onPointerLeaveCapture={() => console.log("onPointerLeaveCapture")}
    >
      <div className="relative h-[500px] w-[500px]">
        <Image
          src="/image-product-1.jpg"
          alt="image 1"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative h-[500px] w-[500px]">
        <Image
          src="/image-product-2.jpg"
          alt="image 1"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative h-[500px] w-[500px]">
        <Image
          src="/image-product-3.jpg"
          alt="image 1"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative h-[500px] w-[500px]">
        <Image
          src="/image-product-4.jpg"
          alt="image 1"
          fill
          className="object-cover"
        />
      </div>
    </Carousel>
  );
}
