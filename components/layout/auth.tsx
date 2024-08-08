import Image from 'next/image';
import Heading from '../elements/heading';
import Paragraph from '../elements/paragraph';
import { ReactNode } from 'react';

type Props = {
  image: string;
  title: string;
  description: string;
  label: string;
  children: ReactNode;
};
const AuthLayout: React.FC<Props> = ({ title, description, label, image, children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="col-span-3">
        <div className="login-card gap-[70px]">
          <div className="max-w-80 w-full aspect-square relative">
            <Image src={image} layout="fill" objectFit="cover" alt="login" />
          </div>
          <div className="flex justify-center items-center flex-col gap-5 max-w-[560px]">
            <Heading className="text-center">{title}</Heading>
            <Paragraph className="text-center">{description}</Paragraph>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="login-card bg-white gap-9">
          <Heading type="h2">{label}</Heading>
          {children}
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
