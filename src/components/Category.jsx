import React from "react";
import { Heading, Label } from "./Molecules/TextComponent";
import { useProducts } from "../store/ProductStore";

export const Category = () => {
  const filters = useProducts((state) => state.filters);
  const setFilters = useProducts((state) => state.setFilters);

  const SelectField = ({ label, value }) => {
    const isSelected = value === filters?.category;
    return (
      <div className="flex gap-4 py-2 pl-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(event) => {
            setFilters("category", event.target.value);
          }}
          value={value}
        />
        <Label>{label}</Label>
      </div>
    );
  };
  return (
    <div>
      <Heading>Category</Heading>
      <SelectField label={"All"} value="" />
      <SelectField label={"Fragrances"} value="fragrances" />
      <SelectField label={"Furniture"} value="furniture" />
      <SelectField label={"Groceries"} value="groceries" />
    </div>
  );
};
