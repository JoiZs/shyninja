import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import Header from "./header";
import Swipercontent from "./swipercontent";
import "swiper/css";
import { Mousewheel } from "swiper";
import Footer from "./footer";
import Firstcont from "./firstcont";
import Secondcont from "./secondcont";
import Thirdcont from "./thirdcont";
import Particlebg from "./particlebg";
import gsap from "gsap";

interface Props {}

const Website: React.FC<Props> = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!!activeSlide) {
      gsap.fromTo("#slide", { opacity: 0 }, { opacity: 1 });
    }
  }, [activeSlide]);
  return (
    <div className="container m-auto relative">
      <div className="col-span-6 fixed bottom-0 lg:relative opacity-40 dark:opacity-100">
        <Particlebg />
      </div>
      <Header />
      <Swiper
        className="h-screen"
        mousewheel={true}
        direction="vertical"
        modules={[Mousewheel]}
        onScroll={(e) => setActiveSlide(e.activeIndex)}
      >
        <SwiperSlide id="slide">
          <Swipercontent content={<Firstcont />} />
        </SwiperSlide>
        <SwiperSlide id="slide">
          <Swipercontent content={<Secondcont />} />
        </SwiperSlide>
        <SwiperSlide id="slide">
          <Swipercontent content={<Thirdcont />} />
        </SwiperSlide>
      </Swiper>
      <Footer />
    </div>
  );
};

export default Website;
