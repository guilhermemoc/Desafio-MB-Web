import React from 'react';
import { ThirdStepProps } from './types';

const ThirdStep: React.FC<ThirdStepProps> = ({
  formValues,
  setFormValues,
  handlePreviewStep,
  handleNextStep,
}) => {
  return (
    <>
      <label className="font-medium">Senha</label>
      <input
        type="password"
        className="rounded w-60 p-0.5 mb-5 border-2 border-black"
        onChange={(e) =>
          setFormValues((prevState) => ({ ...prevState, password: e.target.value }))
        }
        value={formValues.password}
      />
      <div>
        <button
          className="text-yellow-500 border-2 border-orange-400 w-20 rounded mt-3 p-1"
          onClick={handlePreviewStep}
        >
          voltar
        </button>
        <button
          className="bg-amber-500 text-white w-[140px] rounded mt-3 ml-5 p-1"
          onClick={handleNextStep}
        >
          Continuar
        </button>
      </div>
    </>
  );
};

export default ThirdStep;
