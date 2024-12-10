import { FC, ReactNode } from "react";
import css from "./container.module.css";
interface ContainerProps {
  children: ReactNode;
}
export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
