import Heading from '@/components/elements/heading';
import Paragraph from '@/components/elements/paragraph';
import LoginForm from '@/components/forms/login';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="col-span-3">
        <div className="login-card gap-[70px]">
          <div className="max-w-80 w-full aspect-square relative">
            <Image src="/media/login.png" layout="fill" objectFit="cover" alt="login" />
          </div>
          <div className="flex justify-center items-center flex-col gap-5 max-w-[560px]">
            <Heading className="text-center">Fast, Efficient and Productive</Heading>
            <Paragraph className="text-center">
              In this kind of post, the blogger introduces a person they’ve interviewed and provides some background
              information about the interviewee and their work following this is a transcript of the interview.
            </Paragraph>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="login-card bg-white gap-9">
          <Heading type="h2">Login</Heading>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
