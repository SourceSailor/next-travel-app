import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      {/* Background Image */}
      <div className="get-app">
        {/* Text Section */}

        <div className="flex flex-col flexCenter">
          <div>
            <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
              Get for free now!
            </h2>
            <p className="regular-16 mt-5 text-white lg:mt[30px] lg:bg-none mb-10">
              Available on iOS and Android
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="w-full flex flex-col xl:flex-row gap-3 whitespace-nowrap">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        {/* Phones Image */}
        <div>
          <Image src="/phones.png" alt="phones" height={420} width={420} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
