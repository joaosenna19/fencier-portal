import React from "react";
import SelectionCard from "@/components/SelectionCard";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import deleteItem from "@/services/deleteItem";

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
}

const SelectionSection: React.FC<SelectionSectionProps> = ({
  title,
  items,
  selectedId,
  onSelect,
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
                param={title.slice(0, -1).toLowerCase()}
                imageUrl={item.imageUrl}
                isSelected={selectedId === item.id}
                onSelect={onSelect}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="flex justify-center">
        <Link href={`/dashboard/product?add${title}=true`}>
          <Button className="mx-auto mt-2 bg-green-500 hover:bg-green-600">
            Add new {title}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default SelectionSection;
