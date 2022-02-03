import dynamic from "next/dynamic";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import Header from "./header";
import Swipercontent from "./swipercontent";
import "swiper/css";
import { Mousewheel } from "swiper";
import Footer from "./footer";
import Firstcont from "./firstcont";
import Secondcont from "./secondcont";
import Thirdcont from "./thirdcont";

const DarkCtx = dynamic(() => import("../context/darkCtx"), {
  ssr: false,
});

interface Props {}

const Website: React.FC<Props> = (props) => {
  return (
    <div className="container m-auto relative">
      <DarkCtx>
        <Header />
      </DarkCtx>
      <Swiper
        className="h-screen"
        mousewheel={true}
        direction="vertical"
        modules={[Mousewheel]}
      >
        <SwiperSlide>
          <Swipercontent content={<Firstcont />} />
        </SwiperSlide>
        <SwiperSlide>
          <Swipercontent content={<Secondcont />} />
        </SwiperSlide>
        <SwiperSlide>
          <Swipercontent content={<Thirdcont />} />
        </SwiperSlide>
      </Swiper>
      <Footer />
    </div>
  );
};

export default Website;
