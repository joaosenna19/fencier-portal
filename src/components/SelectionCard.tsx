import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface SelectionCardProps {
  id: string;
  name: string;
  imageUrl: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  id,
  name,
  imageUrl,
  isSelected,
  onSelect,
}) => {
  return (
    <Card
      className={`w-[200px] m-2 ${
        isSelected ? "border-2 border-blue-500" : ""
      }`}
      onClick={() => onSelect(id)}
    >
      <CardHeader>
        <CardTitle className="text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image src={imageUrl} alt={name} width="100" height="50" />
      </CardContent>
    </Card>
  );
};

export default SelectionCard;
