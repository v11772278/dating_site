import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.css";

import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import { SwiperCard } from "./swiperCard";
import css from "./swiperGirls.module.css";

interface SwiperGirlsProps {
  data: {
    id: number;
    img: string;
    name: string;
  }[];
}

export const SwiperGirls: React.FC<SwiperGirlsProps> = ({ data }) => {
  return (
    <section className={css.section}>
      <div className={css.buttonDiv}>
        {" "}
        <button type="button" className="prev">
          Prev
        </button>
        <button type="button" className="next">
          Next
        </button>
      </div>

      <Swiper
        direction="horizontal"
        loop={true}
        mousewheel={true}
        css-mode="true"
        modules={[Mousewheel, Pagination, Navigation]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {data.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <SwiperCard id={el.id} img={el.img} name={el.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
