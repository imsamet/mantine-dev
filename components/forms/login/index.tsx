'use client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/elements/button';
import Input from '@/components/elements/input';
import Paragraph from '@/components/elements/paragraph';
import Password from '@/components/elements/password';
import Link from 'next/link';
import { LoginModel } from './_model';

const LoginForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Enter valid email').required('Required email'),
    password: Yup.string().required('Required password'),
  });
  const initialValues: LoginModel = {
    email: '',
    password: '',
  };
  const handleSubmit = (values: LoginModel) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ values, errors, handleChange, handleBlur }) => (
        <div className="flex flex-col gap-6">
          <Input
            placeholder="Email"
            className=" w-96"
            name="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
          />
          <Password
            placeholder="Password"
            className=" w-96"
            name="password"
            value={values.password}
            error={errors.password}
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
          />
          <Button label="Login" />
          <Paragraph className="text-center">
            Don't have an account?{' '}
            <Link className="text-primary hover:text-primary-active" href="/sign-in">
              Create account
            </Link>
          </Paragraph>
        </div>
      )}
    </Formik>
  );
};
export default LoginForm;
