import { useProducts } from "../store/ProductStore";
import { Heading } from "./Molecules/TextComponent";
import { FaStar } from "react-icons/fa6";

export const Rating = () => {
  const setFilters = useProducts((state) => state.setFilters);
  const filters = useProducts((state) => state.filters);

  const RateLabel = ({ count }) => {
    return (
      <div className="flex gap-2 pt-4">
        <input
          checked={count === filters.rating}
          onChange={() => setFilters("rating", count)}
          type="checkbox"
        />

        {Array.from({ length: count }, (_, i) => i).map(() => (
          <FaStar />
        ))}
      </div>
    );
  };
  return (
    <div>
      <Heading>Rating</Heading>
      <div>
        <RateLabel count={5} />
        <RateLabel count={4} />

        <RateLabel count={3} />

        <RateLabel count={2} />

        <RateLabel count={1} />
      </div>
    </div>
  );
};
