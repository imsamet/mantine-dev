import { Button as B } from '@mantine/core';
import classNames from 'classnames';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: () => void;
  isLoading?: boolean;
};

const Button: React.FC<Props> = ({ type, label, isLoading, onClick }) => {
  return (
    <B
      loading={isLoading}
      disabled={isLoading}
      type={type}
      radius="md"
      size="md"
      className={classNames(
        'bg-primary hover:bg-primary-active transition-colors',
        isLoading && 'pointer-events-none cursor-no-drop',
      )}
      onClick={onClick}
    >
      {label}
    </B>
  );
};
export default Button;
