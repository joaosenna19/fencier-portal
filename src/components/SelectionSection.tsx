import React from "react";
import SelectionCard from "@/components/SelectionCard";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
  onAddNew,
}) => {
  return (
    <>
      <h3 className="text-gray-500 font-semibold md:text-lg lg:text-xl mb-1">
        {title}
      </h3>

      <div className="flex justify-center">
        <ScrollArea className="whitespace-nowrap rounded-md border w-full max-w-3xl mx-auto">
          <div className="flex items-center space-x-4 p-4">
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
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <Button
        onClick={onAddNew}
        className="mx-auto mt-2 bg-green-500 hover:bg-green-600"
      >
        Add new {title}
      </Button>
    </>
  );
};

export default SelectionSection;
