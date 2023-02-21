import React from 'react';
import '../styles/Select.scss';
import cities from '../assets/cities.json';

type SelectProps = {
  values: { city: string };
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
  errors: { city: string };
}

const Select: React.FC<SelectProps> = ({ values, handleChange, errors }) => {

  const formatCities = () => {
    return Array.from(cities)
      .sort((a, b) => +a - +b)
      .filter((city) => +city.population > 50000);
  };

  const bigCity = () => {
    let big = 0;

    for (let i = 0; i < cities.length; i++) {
      if (+cities[i].population > big) {
        big = +cities[i].population;
      }
    }

    const bigCity = cities.find((item) => +item.population === big);
    return bigCity;
  };

  const citiesList = formatCities().map((cities, i) => {
    return (
      <option
        className='select__option'
        key={i}
        value={cities.city}>
        {cities.city}
      </option>
    );
  });

  return (
    <div className='form__select-container select'>
      <label className='select__label'>
        Ваш город
      </label>
      <div>
        <select
          className={
            'select__field ' + (errors.city ? 'select__field_invalid' : '')
          }
          value={values.city}
          name='city'
          id='cities'
          onChange={handleChange}
          required>
          <option className='select__option' value='Выберите город' disabled>
            Выберите город
          </option>
          <option className='select__option_big' value={bigCity()?.city}>
            {bigCity()?.city}
          </option>
          {citiesList}
        </select>
        {errors.city && (
          <p className='select__field_error'>{errors.city}</p>
        )}
      </div>
    </div>
  );
};

export default Select;