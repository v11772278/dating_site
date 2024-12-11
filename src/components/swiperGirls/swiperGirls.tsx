import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "../../../node_modules/swiper/swiper.css";
import { Pagination, Navigation } from "swiper/modules";
import { SwiperCard } from "./swiperCard";
import css from "./swiperGirls.module.css";
import { useRef, useState } from "react";

interface SwiperGirlsProps {
  data: {
    id: number;
    img?: string;
    description: string;
    link?: string;
  }[];
}

export const SwiperGirls: React.FC<SwiperGirlsProps> = ({ data }) => {
  const [buttonLabels, setButtonLabels] = useState({ prev: "No", next: "Yes" });
  const swiperRef = useRef<SwiperType | null>(null);

  const updateButtonLabels = (index: number) => {
    if (index >= 5) {
      setButtonLabels({ prev: "Prev", next: "Next" });
    } else {
      setButtonLabels({ prev: "No", next: "Yes" });
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current;
      const activeIndex = swiperInstance.activeIndex;

      if (activeIndex < 5) {
        swiperInstance.slideNext();
      } else if (activeIndex >= 5 && activeIndex < 7) {
        swiperInstance.slideNext();
        updateButtonLabels(activeIndex + 1);
      } else if (activeIndex === 7) {
        swiperInstance.slideTo(5);
        updateButtonLabels(5);
      }
    }
  };

  const handlePrevious = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current;
      const activeIndex = swiperInstance.activeIndex;
      if (activeIndex < 5) {
        swiperInstance.slideNext();
      } else if (activeIndex > 5 && activeIndex <= 7) {
        swiperInstance.slidePrev();
        updateButtonLabels(activeIndex - 1);
      }
    }
  };

  return (
    <section className={css.section}>
      <Swiper
        direction="horizontal"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={false}
        allowTouchMove={false}
        mousewheel={true}
        autoHeight={true}
        css-mode="true"
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".next",
        }}
        onSlideChange={(swiper) => updateButtonLabels(swiper.activeIndex)}
      >
        {data.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <SwiperCard
                id={el.id}
                img={el.img}
                description={el.description}
                link={el.link}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={css.buttonDiv}>
        {" "}
        <button type="button" onClick={handlePrevious}>
          {buttonLabels.prev}
        </button>
        <button type="button" onClick={handleNext}>
          {buttonLabels.next}
        </button>
      </div>
    </section>
  );
};
