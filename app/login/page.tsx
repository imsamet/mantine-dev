import LoginForm from '@/components/forms/login';
import AuthLayout from '@/components/layout/auth';

export default function Home() {
  return (
    <AuthLayout
      title="Fast, Efficient and Productive"
      description="In this kind of post, the blogger introduces a person they’ve interviewed and provides some background information about the interviewee and their work following this is a transcript of the interview."
      label="Login"
      image="/media/login.png"
    >
      <LoginForm />
    </AuthLayout>
  );
}
