import { FC } from "react";
import css from "./girlCard.module.css";
export interface SwiperCardProps {
  id: number;
  img: string;
  description: string;
  link: string;
}

export const GirlCard: FC<SwiperCardProps> = ({
  id,
  img,
  description,
  link,
}) => {
  return (
    <div key={id} className={css.card}>
      <a href={link}>
        {" "}
        <img src={img} alt={description} />
      </a>
      <p>{description}</p>
    </div>
  );
};
