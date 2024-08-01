import React from 'react';
import { SecondStepProps } from './types';

const SecondStep: React.FC<SecondStepProps> = ({
  formValues,
  formOptions,
  setFormValues,
  handlePreviewStep,
  handleNextStep,
}) => {
  
  const isFormValid = () => {
    if (!formValues?.name?.trim() || !formValues?.document?.trim() || !formValues?.birthDate?.trim() || !formValues?.contact?.trim()) {
      return false;
    }
    return true;
  };

  return (
    <>
      <label className="font-medium">{formOptions.name}</label>
      <input
        type="text"
        className="rounded w-60 p-0.5 mb-5 border-2 border-black"
        onChange={(e) =>
          setFormValues((prevState) => ({ ...prevState, name: e.target.value }))
        }
        value={formValues.name ?? ''}
      />
      <label className="font-medium">{formOptions.document}</label>
      <input
        type="text"
        className="rounded w-60 p-0.5 mb-5 border-2 border-black"
        onChange={(e) =>
          setFormValues((prevState) => ({
            ...prevState,
            document: e.target.value,
          }))
        }
        value={formValues.document ?? ''}
      />
      <label className="font-medium">{formOptions.birthDate}</label>
      <input
        type="date"
        className="rounded w-60 p-0.5 mb-5 border-2 border-black"
        onChange={(e) =>
          setFormValues((prevState) => ({
            ...prevState,
            birthDate: e.target.value,
          }))
        }
        value={formValues.birthDate ?? ''}
      />
      <label className="font-medium">{formOptions.contact}</label>
      <input
        type="text"
        className="rounded w-60 p-0.5 mb-5 border-2 border-black"
        onChange={(e) =>
          setFormValues((prevState) => ({
            ...prevState,
            contact: e.target.value,
          }))
        }
        value={formValues.contact ?? ''}
      />
      <div>
        <button
          className="text-yellow-500 border-2 border-orange-400 w-20 rounded mt-3 p-1"
          onClick={handlePreviewStep}
        >
          Voltar
        </button>
        <button
          className={`w-[140px] rounded mt-3 ml-5 p-1 ${
            isFormValid() ? 'bg-amber-500 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'
          }`}
          onClick={handleNextStep}
          disabled={!isFormValid()}
        >
          Continuar
        </button>
      </div>
    </>
  );
};

export default SecondStep;
