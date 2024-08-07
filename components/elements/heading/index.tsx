import { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: ReactNode;
};

const Heading: React.FC<Props> = ({ type = 'h2', className, children }) => {
  const Tag = type as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        'text-dark font-semibold',
        type === 'h1'
          ? 'text-3xl'
          : type === 'h2'
          ? 'text-2xl'
          : type === 'h3'
          ? 'text-xl'
          : type === 'h4'
          ? 'text-lg'
          : type === 'h5'
          ? 'text-base'
          : type === 'h6' && 'text-sm',
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
