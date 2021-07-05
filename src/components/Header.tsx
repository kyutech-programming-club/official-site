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

        <div className="space-x-4">
          <Link href="/">
            <div className="inline-block cursor-pointer">活動内容</div>
          </Link>
          <div className="inline-block">実績</div>
          <div className="inline-block">アクセス</div>
          <div className="inline-block">ブログ</div>
          <div className="inline-block">Q&A</div>
        </div>
      </div>
    </>
  );
};
export default Header;
