import { PasswordInput } from '@mantine/core';
import { ChangeEventHandler, FocusEventHandler } from 'react';
import cn from 'classnames';

type Props = {
  name?: string;
  error?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};
const Password: React.FC<Props> = ({ name, value, error, placeholder, label, className, onChange, onBlur }) => {
  return (
    <PasswordInput
      name={name}
      value={value}
      error={error}
      radius="md"
      className={cn(error && 'text-danger', className)}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      placeholder={placeholder}
    />
  );
};
export default Password;
