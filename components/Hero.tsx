import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 lg:py-20 xl:flex-row overflow-x-hidden">
      {/* Map */}
      <div className="hero-map" />

      {/* Left Side Section */}
      <div className="relative z-20 flex-1 xl:w-1/2">
        <Image
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <h1 className="bold-52 lg:bold-88 mt-3 break-words">
          Putuk Truno Camp Area
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  height={24}
                  width={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198K
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How We Work"
            variant="btn_white_text"
            icon="/play.svg"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex flex-1 items-start justify-center xl:justify-start">
        <div className="relative z-20 w-full max-w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image
                src="/close.svg"
                alt="close"
                height={24}
                width={24}
                className="cursor-pointer"
              />
            </div>
          </div>
          <p className="bold-20 text-white">Half Dome, Yosemite</p>
          <div className="flexBetween mt-5">
            <div className="flex flex-col">
              <p className="bold-16 text-white">Distance</p>
              <p className="bold-20 text-white">163.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="bold-16 text-white">Elevation</p>
              <p className="bold-20 text-white">2,697 ft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
