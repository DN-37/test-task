import React from 'react';
import '../styles/Password.scss';

type PasswordProps = {
  values: { password: string, confirmPassword: string };
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  errors: { password: string, confirmPassword: string };
}

const Password: React.FC<PasswordProps> = ({ values, handleChange, errors }) => {
  return (
    <div className='form__password-container password'>
      <div className='password__initial'>
        <label className='password__label' htmlFor='passwordField'>
          Пароль
        </label>
        <div className='password__initial-container'>
          <div>
            <input
              className={
                'password__field ' +
                (errors.password ? 'password__field_invalid' : '')
              }
              type='password'
              name='password'
              id='passwordField'
              value={values.password}
              onChange={handleChange}
              required
            />
            {errors.password && (
              <p className='password__error'>{errors.password}</p>
            )}
          </div>
          <p className='password__first-note'>
            Ваш новый пароль должен содержать не менее 5 символов.
          </p>
        </div>
      </div>
      <div className='password__confirm'>
        <div className='password__initial'>
          <label className='password__label1' htmlFor='passwordField2'>
            Пароль ещё раз
          </label>
          <div className='password__confirm-container'>
            <div>
              <input
                className={
                  'password__field ' +
                  (errors.confirmPassword ? 'password__field_invalid' : '')
                }
                type='password'
                name='confirmPassword'
                id='passwordField2'
                onChange={handleChange}
                value={values.confirmPassword}
                required
              />
              {errors.confirmPassword && (
                <p className='password__error'>{errors.confirmPassword}</p>
              )}
            </div>

            <p className='password__second-note'>
              Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
              ошибки.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Password;
