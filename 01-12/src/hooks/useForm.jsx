import { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const setValue = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }; //[field] è una Computed Property

  const reset = () => {
    setValues(initialValues);
    console.log("Form resettato", initialValues);
  };

  return { values, setValue, reset };
}
