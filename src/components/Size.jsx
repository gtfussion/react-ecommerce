import { useProducts } from "../store/ProductStore";
import { Heading } from "./Molecules/TextComponent";

const sizes = [
  {
    isSelected: false,
    label: "SM",
  },
  {
    isSelected: true,
    label: "M",
  },
  {
    isSelected: false,
    label: "L",
  },
  {
    isSelected: false,
    label: "XL",
  },
  {
    isSelected: false,
    label: "XXL",
  },
  {
    isSelected: false,
    label: "3XL",
  },
];
export const Size = () => {
  const setFilters = useProducts((state) => state.setFilters);
  const filters = useProducts((state) => state.filters);
  const SizeButton = ({ label }) => {
    const isSelected = filters.size == label;
    return (
      <div
        onClick={() => {
          setFilters("size", label);
        }}
        className={`cursor-pointer h-10 w-10 rounded-xl  flex justify-center items-center border-2  ${
          isSelected ? "bg-green-600" : ""
        } `}
      >
        {label}
      </div>
    );
  };
  return (
    <div>
      <Heading>Size</Heading>
      <div className="flex gap-2 flex-wrap py-4">
        {sizes.map((eachsize, index) => {
          return (
            <div key={index}>
              <SizeButton label={eachsize.label} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
