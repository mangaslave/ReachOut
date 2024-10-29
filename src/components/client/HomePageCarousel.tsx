"use client";
import Image, { StaticImageData } from "next/image";
import personOne from "../../../public/pexels-thgusstavo-2774292.jpg";
import personTwo from "../../../public/pexels-ernest-flowers-174298074-29071817.jpg";
import personThree from "../../../public/pexels-italo-melo-881954-2379004.jpg";

interface CarouselImage {
	src: string | StaticImageData;
	alt: string;
	id: number;
}

const carouselImages: CarouselImage[] = [
	{ src: personOne, alt: "Success story image 1", id: 1 },
	{ src: personTwo, alt: "Success story image 2", id: 2 },
	{ src: personThree, alt: "Success story image 3", id: 3 },
];

export default function HomePageCarousel() {
	return (
		<div className="flex flex-col md:flex-row justify-around items-center w-full">
			{carouselImages.map((image, index) => (
				<div
					className="flex flex-col items-center justify-center"
					key={image.id}
				>
					<div
						key={index}
						className="relative w-64 h-64 overflow-hidden rounded-full"
					>
						<Image
							src={image.src}
							alt={image.alt}
							style={{ objectFit: "cover" }}
						/>
					</div>
					<p className="mx-10 my-6 max-w-sm">
						John was having a difficult time adjusting to life after being
						released from prison, he struggled to find a job and did not have
						many friends or family that were able to assist him in his
						journey...
					</p>
				</div>
			))}
		</div>
	);
}
