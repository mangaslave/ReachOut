import Image from "next/image";

interface JobCardProps {
  baseColor: string,
}

export default function JobCard({baseColor = "bg-orchidPink"}: JobCardProps) {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className={`${baseColor} shadow-lg rounded-lg p-1 w-80 mt-24 pb-1`}>

        <div className="flex items-center justify-between pt-3">
          <div className="text-black px-4">
            <p className="text-black">Job Title</p>
            <h3 className="text-xl font-bold">Company Name</h3>
          </div>
          <div className="pr-3">
            <Image src="/vercel.svg" alt="company logo" width={50} height={50} className="rounded-full" />
          </div>
          
        </div>

        <div className="flex items-center justify-center mb-5 pb-3 pt-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2 text-black py-1 px-2 rounded-md text-xs border-solid border border-black">
              <span className="w-2 h-2 bg-green-600 rounded-full border border-black"></span>
              <span>Excellent</span>
            </span>

            <span className="text-black py-1 px-2 rounded-md text-xs border-solid border border-black">Part-Time</span>
          </div>

        </div>

        <div className="flex justify-end space-x-2 pb-1">
            <Image src="/calendar.svg" alt="clock icon" width={16} height={16} />
            <span className="text-white text-xs">1 day ago</span>
          </div>
        
        <div className="w-full h-16 bg-white rounded-b-lg m-0 flex items-center justify-between pr-3">
          <div className="px-2">
            <p className="text-black">$0/hr</p>
            <p className="text-black">Location</p>
          </div>

          <div>
            <button className=" bg-spaceCadet text-white hover:bg-ylnMnBlue text-sm px-4 py-2 rounded-md h-8">
              View Details
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

