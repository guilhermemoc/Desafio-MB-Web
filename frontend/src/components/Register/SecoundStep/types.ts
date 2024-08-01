import { FormValues } from "../../../types";

  
  export interface FormOptions {
    name: string;
    document: string;
    birthDate: string;
    contact: string;
  }
  
  export interface SecondStepProps {
    formValues: FormValues;
    formOptions: FormOptions;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
    handlePreviewStep: () => void;
    handleNextStep: () => void;
  }