import { Link } from "react-router-dom";
import { Category } from "./Category";
import { Size } from "./Size";
import { Colors } from "./Colors";
import { Rating } from "./Rating";
import { TextInput } from "./TextInput";
import { Heading } from "./Molecules/TextComponent";
import { useProducts } from "../store/ProductStore";

export const Sidebar = () => {
  const setFilters = useProducts((state) => state.setFilters);
  const filters = useProducts((state) => state.filters);
  return (
    <div className="flex flex-col pl-24">
      <Heading>Search</Heading>
      <TextInput
        className="my-4"
        value={filters.searchText}
        onChange={(event) => {
          setFilters("searchText", event.target.value);
        }}
      />
      <Category />
      <Size />
      <Colors />
      <Rating />
    </div>
  );
};
