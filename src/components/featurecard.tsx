import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import gsap from "gsap";

interface Props {}

const contentthree = [
  {
    title: "Phase 1",
    discription:
      "Diamond Bank is a Next Generation Multi Chain Hedge Fund introduces innovative mechanics and proven hyper growth strategies",
  },
  {
    title: "Phase 2",
    discription:
      "Our hyper growth strategies combined with Diamond Miners & Nodes generate additional revenue for our members and the protocol. ",
  },
  {
    title: "Phase 3",
    discription:
      "Diamond Mining and Diamond Nodes are currently in development. Both will further complement the growth of the protocol.",
  },
];

const Featurecard = (props: Props) => {
  return (
    <section className="h-full w-full pb-16 lg:pb-16 flex flex-col lg:flex-row flex-wrap justify-around items-center">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-full mySwiper h-full"
        onSlideChange={() => {
          gsap.fromTo(
            "#qttitle",
            { opacity: 0, translateX: -50 },
            { opacity: 1, translateX: 0 }
          );
        }}
      >
        {contentthree.map((el) => (
          <SwiperSlide key={el.title}>
            <div className="w-full h-full flex justify-center items-center">
              <div className="grid grid-rows-6 grid-cols-6">
                <div
                  id="qttitle"
                  className="row-span-2 col-span-6 lg:row-span-6 lg:col-span-2 uppercase font-bold text-5xl border border-slate-300 dark:border-slate-700 p-3"
                >
                  {el.title}
                </div>
                <div className="row-span-4 col-span-6 lg:row-span-6 lg:col-span-4 flex justify-center items-center text-3xl">
                  Roadmap Missions Description&lt;Here
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Featurecard;
