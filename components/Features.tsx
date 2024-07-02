import Image from "next/image";
import { FEATURES } from "../constants";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const FeaturesData = ({ icon, title, description }: FeaturesProps) => (
  <li className="flex w-full flex-1 flex-col items-start">
    <div className="rounded-full p-4 lg:p-7 bg-green-50">
      <Image src={icon} alt="map" width={28} height={28} />
    </div>
    <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
    <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt[30px] lg:bg-none">
      {description}
    </p>
  </li>
);

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden  bg-feature-bg bg-center bg-no-repeat py-24">
      {/* Image Section */}
      <div className="flex max-container padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            className="feature-phone"
            src="/phone.png"
            alt="phone"
            height={150}
            width={410}
          />
        </div>

        {/* Features Section */}
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              className="absolute left-[-5px] top-[-35px] lg:w-[50px]"
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
            />
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
              Our Features
            </h2>
          </div>
          <div>
            <ul className="mt-10 grid gap-10 md:grid-col-2 lg:mt-20 lg:gap-20">
              {FEATURES.map((feature) => (
                <FeaturesData
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
