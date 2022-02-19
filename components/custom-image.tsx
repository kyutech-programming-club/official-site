import getWindowWidth from "../hooks/getWindowWidth";

const CustomImage = () => {
  const width = getWindowWidth();
  const isBiggerThanLg = width > 1024;

  const simpleImageViewer = (
    <div className="flex justify-center mt-10">
      <div className="max-w-2xl">
        <img
          className="object-cover object-center w-full h-64 rounded-md shadow"
          src="/about/about5.jpg"
          alt=""
        />
      </div>
    </div>
  );

  const multipleImagesViewer = (
    <div className="flex items-center justify-center -mx-4 lg:pl-8 p-4">
      <div className="flex flex-col items-end px-3">
        <img
          className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
          src="/about/about7.jpg"
          alt=""
        />
        <img
          className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
          src="/about/about3.jpg"
          alt=""
        />
      </div>
      <div className="px-3">
        <img
          className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
          src="/about/about4.jpg"
          alt=""
        />
      </div>
    </div>
  );

  return <>{isBiggerThanLg ? multipleImagesViewer : simpleImageViewer}</>;
};

export default CustomImage;
