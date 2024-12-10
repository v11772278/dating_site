import { FC } from "react";

import { QuestionCard } from "../questionCard/questionCard";
import { GirlCard } from "../girlCard/girlCard";
export interface SwiperCardProps {
  id: number;
  img?: string;
  description: string;
  link?: string;
}
export const SwiperCard: FC<SwiperCardProps> = ({
  id,
  img,
  description,
  link,
}) => {
  if (img === undefined || link === undefined) {
    return <QuestionCard id={id} description={description} />;
  } else {
    return <GirlCard id={id} img={img} description={description} link={link} />;
  }
};
