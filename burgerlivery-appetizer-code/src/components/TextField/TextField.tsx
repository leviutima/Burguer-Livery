import { TextFieldElement } from "./TextField.style";

interface TextFieldProps {
  id: string;
  label: string;
  type: string;
}

export const TextField = ({
  id,
  label,
  type = "text",
  ...rest
}: TextFieldProps) => {
  return (
    <TextFieldElement>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...rest} />
    </TextFieldElement>
  );
};
