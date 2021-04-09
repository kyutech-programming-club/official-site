import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      {/* Gradient area */}
      <div className="sticky top-0 bg-gradient-to-r from-green-400 to-blue-500 h-1"></div>
      {/* Header */}
      <div className="sticky top-0 items-center justify-between flex-wrap bg-white p-2 border-b-2 border-gray-400 border-opacity-25">
        <Link href="/">
          <div className="flex items-center flex-no-shrink mr-6 cursor-pointer">
            <Image
              className=""
              src="/proken_logo.png"
              alt="Proken logo"
              width={46}
              height={46}
            />
            <div className="font-semibold text-xl text-gray-600 tracking-tight">
              Proken 216
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Header;
