'use client';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/elements/button';
import Input from '@/components/elements/input';
import { AddBlackListModel } from './_model';
import { useDispatch, useSelector } from '@/hooks/useRedux';
import Textarea from '@/components/elements/textarea';
import addBlackList from '@/store/actions/list/addBlackList';

const AddBlackList: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.app);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required password'),
    surname: Yup.string().required('Required password'),
    description: Yup.string(),
  });
  const initialValues: AddBlackListModel = {
    name: '',
    surname: '',
    description: '',
  };
  const handleSubmit = async (values: AddBlackListModel) => {
    dispatch(
      addBlackList({
        db_Id: 9,
        Id: 0,
        Adi: values.name,
        Soy: values.surname,
        Aciklama: values.description,
      }),
    );
  };
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
            placeholder="Surname"
            className="w-96"
            name="surname"
            value={values.surname}
            error={errors.surname}
            onChange={handleChange('surname')}
            onBlur={handleBlur('surname')}
          />
          <Textarea
            placeholder="Description"
            className="w-96"
            name="description"
            value={values.description}
            error={errors.description}
            onChange={handleChange('description')}
            onBlur={handleBlur('description')}
          />
          <Button isLoading={isLoading} type="submit" label="Add Black List" />
        </Form>
      )}
    </Formik>
  );
};
export default AddBlackList;
