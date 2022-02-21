import CustomImage from "./custom-image";

type Props = {
  content: string;
};

const About = ({ content }: Props) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-6 mx-auto flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <CustomImage />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-8 lg:text-left text-center">
            <p className="mt-6 text-gray-600 text-base text-justify">
              {content}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
