import { FormValues } from "../../../types";

  
export interface ThirdStepProps {
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
    handlePreviewStep: () => void;
    handleNextStep: () => void;
  }