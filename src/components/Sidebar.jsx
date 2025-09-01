import { Link } from "react-router-dom";
import { Category } from "./Category";
import { Size } from "./Size";
import { Colors } from "./Colors";
import { Rating } from "./Rating";

export const Sidebar = () => {
  return (
    <div className="flex flex-col pl-24">
      <Category />
      <Size />
      <Colors />
      <Rating />
    </div>
  );
};
