type Props = {
  imageUrl: string;
  alt: string;
};

const CustomImage = ({ imageUrl, alt }: Props) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="max-w-2xl">
        <img
          className="object-cover object-center w-full h-64 rounded-md shadow"
          src={imageUrl}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default CustomImage;
