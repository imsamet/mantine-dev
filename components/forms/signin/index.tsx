'use client';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/elements/button';
import Input from '@/components/elements/input';
import Paragraph from '@/components/elements/paragraph';
import Password from '@/components/elements/password';
import Link from 'next/link';
import { SigninModel } from './_model';
import login from '@/store/actions/auth/login';
import { useDispatch } from '@/hooks/useRedux';

const SigninForm: React.FC = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Enter valid email').required('Required email'),
    password: Yup.string().required('Required password'),
  });
  const initialValues: SigninModel = {
    name: '',
    email: 'yunus@test.com',
    password: 'yunus',
    confirmPassword: 'yunus',
  };
  const handleSubmit = (values: SigninModel) => {};
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            placeholder="Name"
            className="w-96"
            name="name"
            value={values.name}
            error={errors.name}
            onChange={handleChange('name')}
            onBlur={handleBlur('name')}
          />
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
          <Password
            placeholder="Password"
            className="w-96"
            name="confirmPassword"
            value={values.confirmPassword}
            error={errors.confirmPassword}
            onChange={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
          />
          <Button type="submit" label="Create Account" />
          <Paragraph className="text-center">
            Already have an Account?{' '}
            <Link className="text-primary hover:text-primary-active" href="/login">
              Login
            </Link>
          </Paragraph>
        </Form>
      )}
    </Formik>
  );
};
export default SigninForm;
