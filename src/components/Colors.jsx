import { useProducts } from "../store/ProductStore";
import { Heading } from "./Molecules/TextComponent";

const colorsConf = [
  {
    isSelected: false,
    color: "bg-[#cc2727]",
  },
  {
    isSelected: true,
    color: "bg-[#3a27cc]",
  },
  {
    isSelected: false,
    color: "bg-[#3a27cc]",
  },
  {
    isSelected: false,
    color: "bg-[#a85632]",
  },
  {
    isSelected: false,
    color: "bg-[#efefef]",
  },
  {
    isSelected: false,
    color: "bg-[#cc2727]",
  },
];
export const Colors = () => {
  const setFilters = useProducts((state) => state.setFilters);
  const filters = useProducts((state) => state.filters);

  const Color = ({ color }) => {
    return (
      <div
        onClick={() => setFilters("color", color)}
        className={`h-6 w-6 rounded-full  text-black flex justify-center items-center  ${color} border-2  ${
          filters.color === color ? "border-amber-200" : ""
        }`}
      ></div>
    );
  };

  return (
    <div>
      <Heading>Color</Heading>
      <div className="flex gap-2 flex-wrap py-4">
        {colorsConf.map((eachcolor, index) => {
          return (
            <div key={index}>
              <Color
                isSelected={eachcolor.isSelected}
                color={eachcolor.color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
