import React, { useState } from 'react';
import { ReviewProps } from './types';
import { api } from '../../../utils/api';
const Review: React.FC<ReviewProps> = ({ formValues, handlePreviewStep }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const [success, setSuccess] = useState(false)
  async function handleSubmit(){
    try{
      await api.post('/registration', formValues);
      setSuccess(true)
    } catch(err){
      setErrorMessage(err.response.data.error)
      setError(true)
    }
  }
  return (
    <>
      {error && (
        <h1 className='border-2 border-red-600 w-[200px] text-red-600'>{errorMessage}</h1>
      )}
      {success && (
        <h1 className='border-2 border-green-500 w-[200px] text-green-500'>Cadastro realizado com sucesso.</h1>

      )}
      <label className="font-medium">Endereço de e-mail</label>
      <input
        disabled
        value={formValues.email}
        type="email"
        className="rounded w-60 p-0.5 mb-5 border-2 border-black"
      />
      <label className="font-medium">Nome</label>
      <input
        disabled
        value={formValues.name}
        type="text"
        className="rounded w-60 p-0.5 mb-5 border-2 border-black"
      />
      <label className="font-medium">CPF</label>
      <input
        disabled
        value={formValues.document}
        type="text"
        className="rounded w-60 p-0.5 mb-5 border-2 border-black"
      />
      <label className="font-medium">Data de nascimento</label>
      <input
        disabled
        value={formValues.birthDate}
        type="text"
        className="rounded w-60 p-0.5 mb-5 border-2 border-black"
      />
      <label className="font-medium">Telefone</label>
      <input
        disabled
        value={formValues.contact}
        type="text"
        className="rounded w-60 p-0.5 mb-5 border-2 border-black"
      />
      <label className="font-medium">Senha</label>
      <input
        disabled
        value={formValues.password}
        className="rounded w-60 p-0.5 mb-5 border-2 border-black"
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
          onClick={handleSubmit}
        >
          Cadastrar
        </button>
      </div>
    </>
  );
};

export default Review;
