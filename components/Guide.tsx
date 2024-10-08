import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="regular-18 -mt-1 mb-3 text-green-50">
          WE ARE HERE FOR YOU
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      {/* Boat Section */}
      <div className="flexCenter max-container relative w-full">
        <Image
          className="w-full object-cover object-center 2xl:rounded-5xl"
          src="/boat.png"
          alt="boat"
          height={580}
          width={1440}
        />

        {/* Destination Section*/}
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <div className="flex flex-row">
            {/* Line Graphic*/}

            <Image src="/meter.svg" alt="meter" height={24} width={24} />

            {/* info Wrapper */}
            <div className="flex flex-col h-full justify-between ml-3">
              <div>
                <div className="flex flex-row justify-between">
                  <p className="regular-16 text-gray-20">Destination</p>
                  <p className="bold-16 text-green-50 ml-10">48 Min</p>
                </div>
                <p className="bold-20 mt-1">Aguas Calientes</p>
              </div>
              <div className="align-bottom">
                <div className="flex flex-row justify-between">
                  <p className="regular-16 text-gray-20">Destination</p>
                </div>
                <p className="bold-20 mt-1">Aguas Calientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
