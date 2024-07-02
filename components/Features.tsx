import Image from "next/image";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const FeaturesData = ({ icon, title, description }: FeaturesProps) => (
  <div>
    <div>
      <Image src={icon} alt="map" height={28} width={28} />
    </div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="flex flex-row padding-container max-container w-full pb-24">
      {/* Image Section */}
      {/* <div className="flex">
        <Image
          className="relative"
          src="/feature-bg.png"
          alt="background"
          height={450}
          width={850}
        />
        <Image
          className="absolute z-20 origin-top-left rotate-12"
          src="/phone.png"
          alt="phone"
          height={150}
          width={410}
        />
      </div> */}
      {/* Features Section */}
      <div>
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Our Features</h2>
        <div>
          <FeaturesData
            icon="/play.svg"
            title="Real Maps Can Be Offline"
            description="We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
