import { PROJECT_TAGS } from "@/utils/constants";
import { Badge } from "./ui/Badge";
import { FC } from "react";

interface props {
  type: keyof typeof PROJECT_TAGS;
  onClick?: () => void;
}

export const ProjectTag: FC<props> = ({ type, onClick }) => {
  const tag = PROJECT_TAGS[type];

  const TagIcon = tag.icon || null;
  return (
    <Badge onClick={onClick} variant="secondary" className="flex items-center gap-1">
      {TagIcon && <TagIcon className="w-3 h-3" />}
      {tag.name}
    </Badge>
  );
};
