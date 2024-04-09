import { useNavigate } from "react-router-dom";
import { CategoryListElement } from "./CategoryList.style";

interface CategoryListProps {
  data: {
    text: string;
    link: string;
  };
}

export const CategoryList = ({ data }: CategoryListProps) => {
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    navigate(link);
  };
  return (
    <CategoryListElement onClick={() => handleNavigate(data.link)}>
      {data.text}
    </CategoryListElement>
  );
};
