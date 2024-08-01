export interface FormValues {
    email?: string;
    name?: string;
    document?: string;
    birthDate?: string;
    contact?: string;
    password?: string;
    personType?: 'pf' | 'pj' | '';
  }
  
export interface FormOptions {
    name: string;
    document: string;
    birthDate: string;
    contact: string;
  }
  
export const options = {
    pf: {
      name: 'Nome',
      document: 'CPF',
      birthDate: 'Data de Nascimento',
      contact: 'Telefone',
    },
    pj: {
      name: 'Razão Social',
      document: 'CNPJ',
      birthDate: 'Data de abertura',
      contact: 'Telefone',
    },
  };
  