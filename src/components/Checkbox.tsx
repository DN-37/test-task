import React from 'react';
import '../styles/Checkbox.scss';

type CheckboxProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({ handleChange }) => {
  return (
    <div className='form__checkbox-container checkbox'>
      <label className='checkbox__label'>
        Я согласен
      </label>
      <div className='checkbox__container'>
        <input
          className='checkbox__field'
          type='checkbox'
          name='checkboxState'
          onChange={handleChange}
        />
        <label className='checkbox__note'>
          принимать актуальную информацию на емейл
        </label>
      </div>
    </div>
  );
};

export default Checkbox;