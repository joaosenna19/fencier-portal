import React from "react";
import SelectionCard from "@/components/SelectionCard";
import { Button } from "./ui/button";

interface Item {
  id: string;
  name: string;
  imageUrl: string;
}

interface SelectionSectionProps {
  title: string;
  items: Item[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onAddNew: () => void;
}

const SelectionSection: React.FC<SelectionSectionProps> = ({
  title,
  items,
  selectedId,
  onSelect,
}) => {
  return (
    <>
      <h3 className="text-gray-500 font-semibold md:text-lg lg:text-xl">
        {title}
      </h3>
      <div className="flex justify-around ">
        {items.map((item) => (
          <SelectionCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            isSelected={selectedId === item.id}
            onSelect={onSelect}
          />
        ))}
      </div>
      <Button className="mx-auto bg-green-500 hover:bg-green-600">Add new {title}</Button>
    </>
  );
};

export default SelectionSection;
