import Button from "./button";

const Recruitment = () => {
  return (
    <section className="py-10">
      <div className="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div className="w-full lg:max-w-md">
              <h2 className="mb-4 text-xl font-bold leading-tight tracking-tight sm:text-2xl font-heading">
                プロ研では、プログラミングを楽しむ仲間を募集しています！
              </h2>
              <p className="mb-4 font-medium tracking-tight xl:mb-6">
                プログラミングや開発に興味がある方の連絡をお待ちしています！
              </p>
              <Button
                href="https://twitter.com/kyutech_proken"
                message="連絡はこちら"
                borderColor="pink"
                isExternalPage={true}
              />
            </div>
          </div>
          <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
            <img
              className="mx-auto sm:max-w-sm lg:max-w-md"
              src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
              alt="feature image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
