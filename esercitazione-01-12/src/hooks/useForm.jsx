import { useState, useCallback } from "react";

// Custom hook
function useForm(initialValues, validateFn) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setValue = useCallback((field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    setErrors((prev) => {
      if (prev[field]) {
        const { [field]: removed, ...rest } = prev;
        return rest;
      }
      return prev;
    });
  }, []); //[field] è una Computed Property

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setValue(name, value);
    },
    [setValue]
  );

  const handleSubmit = useCallback(
    (onSubmit) => (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      if (validateFn) {
        const validationErrors = validateFn(values);
        setErrors(validationErrors);

        // Only submit if no errors
        if (Object.keys(validationErrors).length === 0) {
          onSubmit(values);
        }
      } else {
        onSubmit(values);
      }

      setIsSubmitting(false);
    },
    [values, validateFn]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    isSubmitting,
    setValue,
    handleChange,
    handleSubmit,
    reset,
  };
}

export default useForm;
