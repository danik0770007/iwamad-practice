import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type SubmitEvent,
} from "react";
import Button from "../components/ui/Button";
import TextField from "../components/ui/TextField";
import {
  validateRegistration,
  type RegistrationValues,
} from "../lib/validateRegistration";

const initialValues: RegistrationValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

export default function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(initialValues);
  const [touched, setTouched] = useState<
    Partial<Record<keyof RegistrationValues, boolean>>
  >({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length === 0) {
      setIsRegistered(true);
    }
  }

  const showError = (field: keyof RegistrationValues) =>
    touched[field] || submitAttempted ? errors[field] : undefined;

  if (isRegistered) {
    return (
      <p role="status">Thanks, {values.fullName.trim()}. You are registered.</p>
    );
  }

  return (
    <div>
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError("fullName")}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError("email")}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError("password")}
        />

        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError("confirmPassword")}
        />

        <div className="field">
          <label className="check" htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={showError("acceptTerms") ? true : undefined}
              aria-describedby={
                showError("acceptTerms") ? "acceptTerms-error" : undefined
              }
            />
            Accept terms and conditions
          </label>
          {showError("acceptTerms") && (
            <p id="acceptTerms-error" className="field-error">
              {showError("acceptTerms")}
            </p>
          )}
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </div>
  );
}
