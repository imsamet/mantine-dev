import { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  className?: string;
  children: ReactNode;
};

const Paragraph: React.FC<Props> = ({ className, children }) => {
  return <p className={cn('text-gray-500 font-medium text-sm', className)}>{children}</p>;
};
export default Paragraph;
