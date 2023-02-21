import React from 'react';
import '../styles/Form.scss';

import Select from './Select';
import Password from './Password';
import Email from './Email';
import Checkbox from './Checkbox';
import Status from './Status';

const Form: React.FC = () => {
  const useForm = () => {
    const [values, setValues] = React.useState({
      city: 'Выберите город',
      password: '',
      confirmPassword: '',
      email: '',
      checkboxState: 'off',
    });

    const [errors, setErrors] = React.useState({
      city: '',
      password: '',
      confirmPassword: '',
      email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrors(validateForm(values));
      console.log(JSON.stringify(values));
    };

    React.useEffect(() => {
      if (Object.keys(errors).length === 0) {
        alert('Данные формы были успешно отправлены');
      }
    }, [errors]);
    return { values, handleChange, handleSubmit, errors };
  };

  const { values, handleChange, handleSubmit, errors } = useForm();

  function validateForm(values: { email: string, password: string, confirmPassword: string, city: string }) {
    let errors: any = {};
    if (!values.email) {
      errors.email = 'Укажите E-mail';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Неверный E-mail';
    }
    if (!values.password) {
      errors.password = 'Укажите пароль';
    } else if (values.password.length < 5) {
      errors.password = 'Используйте не менее 5 символов';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Укажите пароль';
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Пароли не совпадают';
    }

    if (values.city === 'Выберите город') {
      errors.city = 'Выберите город из списка.';
    }
    return errors;
  }

  function getDate() {
    let date = new Date();
    const monthNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    let message = `последние изменения ${date.getDate()} ${monthNames[date.getMonth()]
      } ${date.getFullYear()} в ${date.toLocaleTimeString()}`;
    return message;
  }

  return (
    <form className='form' noValidate onSubmit={handleSubmit}>
      <Status />
      <Select handleChange={handleChange} values={values} errors={errors} />
      <hr />
      <Password values={values} handleChange={handleChange} errors={errors} />
      <hr />
      <Email values={values} handleChange={handleChange} errors={errors} />
      <Checkbox handleChange={handleChange} />
      <button className='form__btn' type='submit'>
        Изменить
      </button>
      <p className='form__date'>
        {Object.keys(errors).length === 0 && getDate()}
      </p>
    </form>
  );
};

export default Form;