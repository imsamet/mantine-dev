'use client';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/elements/button';
import Input from '@/components/elements/input';
import Paragraph from '@/components/elements/paragraph';
import Password from '@/components/elements/password';
import Link from 'next/link';
import { LoginModel } from './_model';
import login from '@/store/actions/auth/login';
import { useDispatch } from '@/hooks/useRedux';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Enter valid email').required('Required email'),
    password: Yup.string().required('Required password'),
  });
  const initialValues: LoginModel = {
    email: 'yunus@test.com',
    password: 'yunus',
  };
  const handleSubmit = async (values: LoginModel) => {
    try {
      await dispatch(
        login({
          userName: values.email,
          password: values.password,
        }),
      );
      route.push('/');
    } catch (error) {}
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            placeholder="Email"
            className="w-96"
            name="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
          />
          <Password
            placeholder="Password"
            className="w-96"
            name="password"
            value={values.password}
            error={errors.password}
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
          />
          <Button type="submit" label="Login" />
          <Paragraph className="text-center">
            {"Don't have an account? "}
            <Link className="text-primary hover:text-primary-active" href="/sign-in">
              Create account
            </Link>
          </Paragraph>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
