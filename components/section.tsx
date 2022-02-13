import { ReactNode } from "react";

type Props = {
  index: string;
  borderColor: string;
  content?: string;
  children?: ReactNode;
};

const Section = ({ index, borderColor, content, children }: Props) => {
  const pinkBorderStyle =
    "text-2xl font-bold text-gray-700 md:text-4xl border-b-4 border-pink-400 inline-block";
  const cyanBorderStyle =
    "text-2xl font-bold text-gray-700 md:text-4xl border-b-4 border-cyan-400 inline-block";
  const tealBorderStyle =
    "text-2xl font-bold text-gray-700 md:text-4xl border-b-4 border-teal-400 inline-block";
  const nothingBorderStyle =
    "text-2xl font-bold text-gray-700 md:text-4xl border-b-4 border-gray-400 inline-block";

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
    <div className="container px-6 py-16 mx-auto text-center">
      <div className="max-w-3xl mx-auto">
        <div className={attachStyle(borderColor)}>{index}</div>
        <p className="mt-6 text-gray-500 text-base text-justify">{content}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
