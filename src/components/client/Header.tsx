"use client";

interface HeaderProps {
  headerMsg: string;
  subHeadingMsg: string;
}

const Header = ({headerMsg, subHeadingMsg}: HeaderProps) => {
  return (
    <nav className="bg-white border-b border-gray-200 w-full top-0 z-50">
      <div className="max-w-7xl mx-1 px-4 sm:px-4 lg:px-6">
        <div className="flex justify-start items-center h-20">
          <div className="flex flex-col w-full md:w-2/3 lg:w-1/2">
            <h1 className="text-2xl font-semibold text-gray-900">{headerMsg}</h1>
            <p className="text-sm text-gray-600">{subHeadingMsg}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
