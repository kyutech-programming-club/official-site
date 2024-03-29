import { ReactNode } from "react";

type Props = {
  index: string;
  borderColor: string;
  children?: ReactNode;
};

const Section = ({ index, borderColor, children }: Props) => {
  const pinkBorderStyle = "w-16 h-1 rounded-full bg-pink-400 inline-flex";
  const cyanBorderStyle = "w-16 h-1 rounded-full bg-cyan-400 inline-flex";
  const tealBorderStyle = "w-16 h-1 rounded-full bg-teal-400 inline-flex";
  const nothingBorderStyle = "w-16 h-1 rounded-full bg-gray-400 inline-flex";

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
    <div className="container px-6 pt-16 py-8 mx-auto text-center">
      <div className="max-w-3xl mx-auto">
        <div className="text-2xl font-bold text-gray-700 md:text-4xl inline-block">
          {index}
        </div>
        <div className="flex my-6 justify-center">
          <div className={attachStyle(borderColor)}></div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
