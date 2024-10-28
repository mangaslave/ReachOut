"use client";
import Image, {StaticImageData} from "next/image";
import {useState} from "react";
import personOne from "../../public/pexels-thgusstavo-2774292.jpg";
import personTwo from "../../public/pexels-ernest-flowers-174298074-29071817.jpg";
import personThree from "../../public/pexels-italo-melo-881954-2379004.jpg";

interface CarouselImage {
  src: string | StaticImageData;
  alt: string;
  id: number;
}

const carouselImages: CarouselImage[] = [
  {src: personOne, alt: "Success story image 1", id: 1},
  {src: personTwo, alt: "Success story image 2", id: 2},
  {src: personThree, alt: "Success story image 3", id: 3},
];

export default function HomePageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const shiftLeft = () => {};

  const shiftRight = () => {};

  return (
    <div className="flex justify-around items-center w-full">
      <button
        onClick={shiftRight}
        className="absolute left-0 z-10 p-2 bg-spaceCadet hover:bg-ylnMnBlue text-white rounded-lg"
      >
        &lt;
      </button>
      {carouselImages.map((image, index) => (
        <div key={index} className="flex-shrink-0 flex justify-center items-center w-1/3 p-2">
          <Image
            src={image.src}
            alt={image.alt}
            width={300} // Set a fixed width
            height={200} // Set a fixed height
            className="object-cover rounded-full"
          />
        </div>
      ))}
      <button
        onClick={shiftLeft}
        className="absolute right-0 z-10 p-2 bg-spaceCadet hover:bg-ylnMnBlue text-white rounded-lg"
      >
        &gt;
      </button>
    </div>
  );
}
