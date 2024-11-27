"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import personOne from "../../../public/static/images/pexels-thgusstavo-2774292.jpg";
import personTwo from "../../../public/static/images/pexels-ernest-flowers-174298074-29071817.jpg";
import personThree from "../../../public/static/images/pexels-italo-melo-881954-2379004.jpg";
import personFour from "../../../public/static/images/person-four.jpeg";
import personFive from "../../../public/static/images/person-five.jpeg";
import personSix from "../../../public/static/images/person-six.jpeg";
import logo from "../../../public/static/images/logo-new.svg"; 

interface CarouselImage {
  src: StaticImageData;
  alt: string;
  id: number;
  name: string;
  job: string;
  story: string;
}

const carouselImages: CarouselImage[] = [
  {
    src: personOne,
    alt: "success story 1",
    id: 1,
    name: "Robert",
    job: "Chef",
    story:
      "Through ReachOut, Robert connected with a local restaurant owner who gave him a chance. Now he runs two food trucks, serving as an inspiration to others.",
  },
  {
    src: personTwo,
    alt: "success story 2",
    id: 2,
    name: "James",
    job: "Mover",
    story:
      "ReachOut matched James with a moving company eager for reliable workers. He quickly advanced and now manages his own team.",
  },
  {
    src: personThree,
    alt: "success story 3",
    id: 3,
    name: "Michael",
    job: "Entrepreneur",
    story:
      "Michael utilized ReachOut's training resources to start his own maintenance business. Today, he hires others rebuilding their lives.",
  },
  {
    src: personFour,
    alt: "success story 4",
    id: 4,
    name: "Sophia",
    job: "Graphic Designer",
    story:
      "After connecting with a design studio through ReachOut, Sophia gained experience and now mentors others beginning their careers.",
  },
  {
    src: personFive,
    alt: "success story 5",
    id: 5,
    name: "Liam",
    job: "Furniture Maker",
    story:
      "ReachOut connected Liam to a local carpentry shop, where he honed his skills. He now runs his own furniture-making business.",
  },
  {
    src: personSix,
    alt: "success story 6",
    id: 6,
    name: "Emma",
    job: "Non-Profit Leader",
    story:
      "With ReachOut's support, Emma started a non-profit focused on second-chance hiring. Her efforts inspire countless individuals.",
  },
];

export default function HomePageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12">
      <div className="relative flex items-center justify-center h-[350px]">
        {carouselImages.map((image, index) => {
          const position =
            (index - currentIndex + carouselImages.length) %
            carouselImages.length;

          let transform = "";
          let blur = "";
          let opacity = "";
          let zIndex = 0;

          if (position === 0) {
            // Center card
            transform = "translate-x-0 scale-100";
            blur = "blur-none";
            opacity = "opacity-100";
            zIndex = 20;
          } else if (position === 1 || position === carouselImages.length - 1) {
            // Side cards
            transform =
              position === 1 ? "translate-x-60 scale-75" : "-translate-x-60 scale-75";
            blur = "blur-md";
            opacity = "opacity-75";
            zIndex = 10;
          } else {
            // Hidden cards
            transform = "translate-x-0 scale-50";
            blur = "blur-lg";
            opacity = "opacity-0";
            zIndex = 0;
          }

          return (
            <div
              key={image.id}
              className={`absolute transition-all duration-500 ease-in-out transform ${transform} ${blur} ${opacity}`}
              style={{ zIndex }}
            >
              <CardContent image={image} />
            </div>
          );
        })}
      </div>

      {/* Nav buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-3 hover:bg-gray-300 z-30"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-3 hover:bg-gray-300 z-30"
      >
        &#8594;
      </button>
    </div>
  );
}

function CardContent({ image }: { image: CarouselImage }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-80 h-96 flex flex-col items-center text-center">
      <div className="w-28 h-28 mb-4">
        <Image
          src={image.src}
          alt={image.alt}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold">{image.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{image.job}</p>
      <p className="text-sm text-spaceCadet-700">{image.story}</p>
      <Image src={logo} alt="reachout logo" className="w-10 h-10 mt-5 p-2 bg-ylnMnBlue bg-opacity-10 rounded-full" />
    </div>
  );
}
