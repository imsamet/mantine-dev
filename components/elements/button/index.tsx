import { Button as Btn } from '@mantine/core';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ type, label, onClick }) => {
  return (
    <Btn type={type} radius="md" size="md" className="bg-primary hover:bg-primary-active" onClick={onClick}>
      {label}
    </Btn>
  );
};
export default Button;
