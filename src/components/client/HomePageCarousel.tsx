"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import personOne from "../../../public/static/images/man-passing-food-in-truck-cropped.jpg";
import personTwo from "../../../public/static/images/pexels-ernest-flowers-174298074-29071817.jpg";
import personThree from "../../../public/static/images/pexels-italo-melo-881954-2379004.jpg";
import personFour from "../../../public/static/images/person-four.jpeg";
import personFive from "../../../public/static/images/person-five.jpeg";
import personSix from "../../../public/static/images/person-six.jpeg";
import logo from "../../../public/static/images/logo-new.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, PanInfo } from "framer-motion";

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
	const [isDragging, setIsDragging] = useState(false);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + carouselImages.length) % carouselImages.length
		);
	};

	const [windowWidth, setWindowWidth] = useState<number>(0);

	const swipeConfidenceThreshold = 10000;
	const swipePower = (offset: number, velocity: number) => {
		return Math.abs(offset) * velocity;
	};

	const handleDragEnd = (
		event: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo
	) => {
		const swipe = swipePower(info.offset.x, info.velocity.x);

		if (swipe > swipeConfidenceThreshold) {
			handlePrev();
		} else if (swipe < -swipeConfidenceThreshold) {
			handleNext();
		}
	};

	useEffect(() => {
		setWindowWidth(window.innerWidth);

		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const getPositionStyles = (position: number) => {
		const isMobile = windowWidth < 768;
		const translateValue = isMobile ? 40 : 60;

		if (position === 0) {
			return {
				x: 0,
				scale: 1,
				filter: "blur(0px)",
				opacity: 1,
				zIndex: 20,
			};
		} else if (position === 1) {
			return {
				x: `${translateValue}%`,
				scale: isMobile ? 0.65 : 0.75,
				filter: "blur(2px)",
				opacity: 0.75,
				zIndex: 10,
			};
		} else if (position === carouselImages.length - 1) {
			return {
				x: `-${translateValue}%`,
				scale: isMobile ? 0.65 : 0.75,
				filter: "blur(2px)",
				opacity: 0.75,
				zIndex: 10,
			};
		} else {
			return {
				x: 0,
				scale: 0.5,
				filter: "blur(4px)",
				opacity: 0,
				zIndex: 0,
			};
		}
	};

	return (
		<div className="relative w-full px-4 md:px-6 py-8 md:py-12">
			<motion.div
				className="relative flex items-center justify-center min-h-[300px] md:h-[350px]"
				drag="x"
				dragConstraints={{ left: 0, right: 0 }}
				dragElastic={0.2}
				onDragStart={() => setIsDragging(true)}
				onDragEnd={(event, info) => {
					setIsDragging(false);
					handleDragEnd(event, info);
				}}
				style={{ cursor: isDragging ? "grabbing" : "grab" }}
			>
				{carouselImages.map((image, index) => {
					const position =
						(index - currentIndex + carouselImages.length) %
						carouselImages.length;

					const styles = getPositionStyles(position);

					return (
						<motion.div
							key={image.id}
							className="absolute transition-all duration-500 ease-in-out"
							style={styles}
						>
							<CardContent image={image} />
						</motion.div>
					);
				})}
			</motion.div>

			{/* Nav buttons */}
			<button
				onClick={handlePrev}
				className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 bg-gray-200 rounded-full p-3 hover:bg-gray-300 z-30"
			>
				<ChevronLeft />
			</button>
			<button
				onClick={handleNext}
				className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 bg-gray-200 rounded-full p-3 hover:bg-gray-300 z-30"
			>
				<ChevronRight />
			</button>
		</div>
	);
}

function CardContent({ image }: { image: CarouselImage }) {
	return (
		<div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-[280px] md:w-[320px] h-[360px] md:h-[384px] flex flex-col items-center text-center">
			<div className="ww-20 h-20 md:w-28 md:h-28 mb-3 md:mb-4">
				<Image
					src={image.src}
					alt={image.alt}
					className="w-full h-full rounded-full object-cover"
				/>
			</div>
			<h3 className="text-lg md:text-xl font-semibold">{image.name}</h3>
			<p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
				{image.job}
			</p>
			<p className="text-xs md:text-sm text-spaceCadet-700">{image.story}</p>
			<Image
				src={logo}
				alt="reachout logo"
				className="w-8 h-8 md:w-10 md:h-10 mt-4 md:mt-5 p-2 bg-ylnMnBlue bg-opacity-10 rounded-full"
			/>
		</div>
	);
}
