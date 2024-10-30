"use client";
import Image, {StaticImageData} from "next/image";
import personOne from "../../../public/static/images/pexels-thgusstavo-2774292.jpg";
import personTwo from "../../../public/static/images/pexels-ernest-flowers-174298074-29071817.jpg";
import personThree from "../../../public/static/images/pexels-italo-melo-881954-2379004.jpg";

interface CarouselImage {
  src: string | StaticImageData;
  alt: string;
  id: number;
  story: string
}

const carouselImages: CarouselImage[] = [
  {src: personOne, alt: "Success story image 1", id: 1, story: "After serving 12 years, Robert found his calling in the prison's culinary program. Upon release, a local restaurant gave him a chance as a line cook. Today, he owns two successful food trucks and actively hires others recently released, believing everyone deserves a fresh start..."},
  {src: personTwo, alt: "Success story image 2", id: 2, story: "Starting with a job at a local moving company after release, James worked hard to learn the business from the ground up. His reliability and work ethic earned him a promotion to team lead within a year. Now he owns his own moving company, specializing in residential moves, and takes pride in offering opportunities to others seeking a fresh start..." },
  {src: personThree, alt: "Success story image 3", id: 3, story: "Michael discovered his talent for business planning while taking classes during his sentence. After release, he started small with a pressure washing service. Five years later, his maintenance company employs 15 people and provides job training for those recently released, proving change is possible..."
},
];

export default function HomePageCarousel() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full">
      {carouselImages.map((image, index) => (
        <div className="flex flex-col items-center justify-center" key={image.id}>
          <div key={index} className="relative w-64 h-64 overflow-hidden rounded-full">
            <Image src={image.src} alt={image.alt} style={{objectFit: "cover"}} />
          </div>
          <p className="mx-10 my-6 max-w-sm">
            {image.story}
          </p>
        </div>
      ))}
    </div>
  );
}
