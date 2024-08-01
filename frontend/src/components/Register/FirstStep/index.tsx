import React from 'react';
import { FirstStepProps } from './types';

const FirstStep: React.FC<FirstStepProps> = ({ formValues, setFormValues, handleChangeInputValue, handleNextStep }) => {
  const isFormValid = () => {
    // Regex valida email
    const isEmailValid = formValues.email?.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email ?? '');
    const isPersonTypeSelected = formValues.personType?.trim() !== '';
    return isEmailValid && isPersonTypeSelected;
  };

  return (
    <>
      <label className='font-medium'> Endereço de e-mail </label>
      <input
        type="email"
        className='rounded w-60 p-0.5 mb-5 border-2 border-black'
        value={formValues.email ?? ''}
        onChange={(e) =>
          setFormValues((prevState) => ({ ...prevState, email: e.target.value }))
        }
      />
      <div>
        <input
          type="radio"
          id="pj"
          name="type"
          value="pj"
          onChange={handleChangeInputValue}
          checked={formValues.personType === 'pj'}
        />
        <label htmlFor="pj">Pessoa Jurídica</label>
        <input
          type="radio"
          id="pf"
          name="type"
          value="pf"
          className='ml-5'
          onChange={handleChangeInputValue}
          checked={formValues.personType === 'pf'}
        />
        <label htmlFor="pf">Pessoa Física</label>
      </div>
      <button
        className={`w-60 rounded mt-3 p-1 ${
          isFormValid() ? 'bg-amber-500 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'
        }`}
        onClick={handleNextStep}
        disabled={!isFormValid()}
      >
        Continuar
      </button>
    </>
  );
};

export default FirstStep;
