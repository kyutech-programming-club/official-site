import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight pt-8">
      <Link href="/">
        <a>Home</a>
      </Link>
    </h2>
  );
};

export default Header;
