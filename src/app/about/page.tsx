import HomePageNavBar from "@/components/client/HomePageNavBar";
import Image from "next/image";
import heroImage from "../../../public/static/images/Hero-Image.jpg";

export default function About() {
  return (
    <>
      <HomePageNavBar />
      <div className="flex w-full h-max bg-caribbeanCurrant">
        <div className="flex flex-col ml-20 xl:ml-52 justify-evenly w-1/2 max-w-lg z-20 relative">
          <h1 className="text-white text-2xl md:text-5xl font-bold py-4">Who We Are</h1>
          <p className="md:py-4 text-sm text-white md:text-lg">
            At ReachOut, we introduce people with criminal records to fair-chance employers who believe in their
            potential. With personalized job matches and an extensive resource database, we&#39;re here to help people build
            a new future, one connection at a time.
          </p>
          <button className="font-bold text-white rounded-lg my-6 w-44 h-10 bg-spaceCadet hover:bg-ylnMnBlue">
            Get Started Now!
          </button>
        </div>
        <div className="relative z-10 w-1/2 mr-0 ml-auto">
          <div className="absolute inset-0 bg-gradient-to-r to-40% from-caribbeanCurrant to-transparent z-10 overflow-hidden" />
          <Image src={heroImage} alt="Hero image" width={1000} height={1000} className="object-cover w-full h-full" />
        </div>
      </div>
    </>
  );
}
