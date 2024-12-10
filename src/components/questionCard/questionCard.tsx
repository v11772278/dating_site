import { FC } from "react";
import css from "./questionCard.module.css";
export interface QuestionCardProps {
  id: number;

  description: string;
}

export const QuestionCard: FC<QuestionCardProps> = ({
  id,

  description,
}) => {
  return (
    <div key={id} className={css.card}>
      <p>{description}</p>
    </div>
  );
};
