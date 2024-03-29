import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const headerMenu = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/kyutech_proken?lang=ja',
    },
    {
      name: 'Blog',
      url: 'https://twitter.com/kyutech_proken?lang=ja',
    },
  ];

  return (
    <>
      {/* Gradient area */}
      <div className="top-0 h-8 bg-gradient-to-r from-green-400 to-blue-500">
        <div className="sticky text-xl font-semibold text-white text-center">
          Welcome to Proken HopePage!
        </div>
      </div>
      {/* Header */}
      <div className="sticky top-0 flex items-center justify-between bg-white p-2 border-b-2 border-gray-400 border-opacity-25">
        {/* Logo and name */}
        <div className="mr-6 cursor-pointer">
          <Link href="/">
            <div className="flex items-center">
              <Image
                className=""
                src="/proken_logo.png"
                alt="Proken logo"
                width={64}
                height={64}
              />
              <div className="px-2 font-extrabold text-2xl text-gray-600">
                Proken 216
              </div>
            </div>
          </Link>
        </div>

        {/* Header menu */}
        <div className="flex items-center justify-between">
          {headerMenu.map((headerMenu) => (
            <Link href={headerMenu.url}>
              <div className="px-2 md:px-4">
                <div
                  className="font-bold text-xl text-gray-600"
                  key={headerMenu.name}>
                  {headerMenu.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Header;
