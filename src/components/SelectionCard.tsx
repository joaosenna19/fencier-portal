import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PencilLine, Trash } from "lucide-react";
import Link from "next/link";

interface SelectionCardProps {
  id: string;
  name: string;
  imageUrl: string;
  isSelected: boolean;
  param: string;
  onSelect: (id: string) => void;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  id,
  name,
  imageUrl,
  isSelected,
  param,
  onSelect,
}) => {
  return (
    <div className="rounded-md">
      <Card
        className={`w-[200px]  m-2 items-center m-0 ${
          isSelected ? "border-2 border-blue-500 p-2" : "p-0"
        }`}
        onClick={() => onSelect(id)}
      >
        <CardHeader className="p-0">
          <CardTitle className="text-center text-sm">{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center p-0">
          <Image src={imageUrl} alt={name} width="100" height="50" />
        </CardContent>
        <CardFooter className="flex justify-center space-x-2 p-0">
          <Link
            href={`/dashboard/product?deleteMaterials=true&id=${id}&param=${param}`}
          >
            <Button
              variant="destructive"
              className="m-1 p-2 border rounded-3x1"
            >
              <Trash size={14} />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SelectionCard;
