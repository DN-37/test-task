import React from 'react';
import '../styles/Email.scss';

type EmailProps = {
  values: { email: string };
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  errors: { email: string };
}

const Email: React.FC<EmailProps> = ({ values, handleChange, errors }) => {
  return (
    <div className='form__email-container email'>
      <label className='email__label'>Электронная почта:</label>
      <div className='email__container'>
        <div className='email__input'>
          <input
            className={
              'email__field ' + (errors.email ? 'email__field_invalid' : '')
            }
            type='email'
            name='email'
            required
            value={values.email}
            onChange={handleChange}
            autoComplete='email'
          />
          {errors?.email ? (
            <p className='email__field_error'>{errors.email}</p>
          ) : (
            ''
          )}
        </div>
        <p className='email__note'>
          Можно изменить адрес, указанный при регистрации
        </p>
      </div>

    </div>
  );
};

export default Email;