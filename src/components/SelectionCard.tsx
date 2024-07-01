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
import { useAuth } from "@/context/AuthContext";

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
  const { user } = useAuth();
  console.log(user);
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
          <Button className="bg-blue-500 hover:bg-blue-600 m-1 p-2 border rounded-3x1">
            <PencilLine size={14} />
          </Button>
          <Button variant="destructive" className="m-1 p-2 border rounded-3x1">
            <Trash size={14} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SelectionCard;
