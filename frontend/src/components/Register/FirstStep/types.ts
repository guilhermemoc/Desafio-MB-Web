import { FormValues } from "../../../types";

export interface FirstStepProps {
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
    handleChangeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleNextStep: () => void;
  }