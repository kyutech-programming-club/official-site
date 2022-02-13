const Hero = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-[32rem]"
      style={{
        backgroundImage: "url(/assets/hero/hero2.jpg)",
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-white lg:text-6xl font-mono">
            Welcome to proken <span className="text-cyan-300">2</span>
            <span className="text-pink-400">1</span>
            <span className="text-teal-300">6</span>!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
