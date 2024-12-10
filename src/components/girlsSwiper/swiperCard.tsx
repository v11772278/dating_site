import { FC } from "react";
import css from "./swiperCard.module.css";
export interface SwiperCardProps {
  id: number;
  img: string;
  name: string;
}
export const SwiperCard: FC<SwiperCardProps> = ({ id, img, name }) => {
  return (
    <div key={id} className={css.card}>
      <img src={img} alt={name} />
      <a href="/">{name}</a>
    </div>
  );
};
