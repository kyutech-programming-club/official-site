type Props = {
  href: string;
  message: string;
  borderColor: string;
};

const button = ({ href, message, borderColor }: Props) => {
  const pinkBorderStyle =
    "inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide transition duration-200 rounded-full shadow-md hover:text-deep-purple-900 bg-white border-pink-400 border-4 focus:shadow-outline focus:outline-none";
  const cyanBorderStyle =
    "inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide transition duration-200 rounded-full shadow-md hover:text-deep-purple-900 bg-white border-cyan-400 border-4 focus:shadow-outline focus:outline-none";
  const tealBorderStyle =
    "inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide transition duration-200 rounded-full shadow-md hover:text-deep-purple-900 bg-white border-teal-400 border-4 focus:shadow-outline focus:outline-none";
  const nothingBorderStyle =
    "inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide transition duration-200 rounded-full shadow-md hover:text-deep-purple-900 bg-white border-gray-400 border-4 focus:shadow-outline focus:outline-none";

  const attachStyle = (color: string) => {
    if (color === "pink") {
      return pinkBorderStyle;
    } else if (color === "cyan") {
      return cyanBorderStyle;
    } else if (color === "teal") {
      return tealBorderStyle;
    } else {
      return nothingBorderStyle;
    }
  };

  return (
    <div>
      <a href={href} className={attachStyle(borderColor)}>
        {message}
      </a>
    </div>
  );
};

export default button;
