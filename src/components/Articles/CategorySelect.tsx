import { Category, CATEGORY } from "./shared";

type CategorySelectProps = {
  onChange: (category: Category) => void;
  disabled: boolean;
  category: Category;
};

export const CategorySelect: React.FC<CategorySelectProps> = ({
  onChange,
  disabled,
  category,
}) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value as Category)}
      disabled={disabled}
      value={category}
    >
      {Object.values(CATEGORY).map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
