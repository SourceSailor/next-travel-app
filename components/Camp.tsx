import Image from "next/image";
import { PEOPLE_URL } from "../constants";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => (
  <div
    className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
  >
    <div className="flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-10">
      {/* Camp Info */}

      <div className="flex flex-row flexCenter">
        <div className="mr-3 rounded-full bg-green-50 p-4">
          <Image src="/folded-map.svg" alt="map" height={28} width={28} />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-white bold-18">{title}</h4>
          <p className="text-white regular-14">{subtitle}</p>
        </div>
      </div>

      {/* People Joined */}
      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((link) => (
            <Image
              className="inline-block h-10 w-10 rounded-full"
              src={link}
              key={link}
              alt="people"
              height={52}
              width={52}
            />
          ))}
        </span>
        <p className="text-white bold-16 md:bold-20">{peopleJoined}</p>
      </div>
    </div>
  </div>
);

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="91+ Joined"
        />
      </div>
      <div className="bg-green-50 p-10 mx-5 mt-10 rounded-xl">
        <div>
          <p>
            <span>Feeling Lost</span> And Not Knowing The Way?
          </p>
          <p>
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
