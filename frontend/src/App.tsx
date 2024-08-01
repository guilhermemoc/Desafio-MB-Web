import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import FirstStep from './components/Register/FirstStep';
import SecondStep from './components/Register/SecoundStep';
import ThirdStep from './components/Register/ThirthStep';
import Review from './components/Register/Review';
import Container from './components/Container';
import { FormOptions, options, FormValues } from './types';


function App() {
  const [step, setStep] = useState<number>(1);
  const [personType, setPersonType] = useState<'pf' | 'pj'>('pj');
  const [formOptions, setFormOptions] = useState<FormOptions>(options[personType]);
  const [formValues, setFormValues] = useState<FormValues>({});
  function handleNextStep() {
    setStep(step + 1);
  }

  function handlePreviewStep() {
    setStep(step - 1);
  }

  const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as 'pf' | 'pj';
    setPersonType(value);
    setFormValues((prevState) => ({ ...prevState, personType: value }));
  };

  useEffect(() => {
    setFormOptions(options[personType]);
  }, [personType]);

  return (
    <>
      {step === 1 && (
        <Container step={step} title="Seja Bem Vindo(a)">
          <FirstStep
            handleChangeInputValue={handleChangeInputValue}
            handleNextStep={handleNextStep}
            setFormValues={setFormValues}
            formValues={formValues}
          />
        </Container>
      )}

      {step === 2 && (
        <Container
          step={step}
          title={personType === 'pj' ? 'Pessoa Juridica' : 'Pessoa Fisica'}
        >
          <SecondStep
            formOptions={formOptions}
            handlePreviewStep={handlePreviewStep}
            handleNextStep={handleNextStep}
            setFormValues={setFormValues}
            formValues={formValues}
          />
        </Container>
      )}
      {step === 3 && (
        <Container step={step} title="Senha de acesso">
          <ThirdStep
            handlePreviewStep={handlePreviewStep}
            handleNextStep={handleNextStep}
            setFormValues={setFormValues}
            formValues={formValues}
          />
        </Container>
      )}
      {step === 4 && (
        <Container step={step} title="Revise suas informações">
          <Review formValues={formValues} handlePreviewStep={handlePreviewStep} />
        </Container>
      )}
    </>
  );
}
export default App;
