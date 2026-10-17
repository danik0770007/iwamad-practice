import { useState, type FormEvent, type ChangeEvent } from "react";
import type { CampusEvent } from "../data/events";
import { validateSignup } from "../lib/validateSignup";
import TextField from "./ui/TextField";
import Button from "./ui/Button";

type EventSignupFormProps = {
  event: CampusEvent;
};

export const EventSignupForm = ({ event }: EventSignupFormProps) => {
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    tickets: "1",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const errors = validateSignup(values, seatsLeft);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length === 0) {
      const bookedCount = Number(values.tickets);
      setSeatsLeft((prev) => prev - bookedCount);
      setSuccessMessage(`Booked: ${values.tickets} for ${values.fullName}.`);
      setValues({ fullName: "", email: "", tickets: "1" });
      setTouched({});
      setSubmitAttempted(false);
    }
  };

  return (
    <div style={{ marginTop: "var(--space-6)" }}>
      <p>Seats left: {seatsLeft}</p>
      {successMessage && <p role="status">{successMessage}</p>}

      <form onSubmit={handleSubmit} noValidate className="form">
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={() => handleBlur("fullName")}
          error={
            touched.fullName || submitAttempted ? errors.fullName : undefined
          }
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          error={touched.email || submitAttempted ? errors.email : undefined}
        />
        <TextField
          label="Tickets"
          type="number"
          min={1}
          max={4}
          name="tickets"
          value={values.tickets}
          onChange={handleChange}
          onBlur={() => handleBlur("tickets")}
          error={
            touched.tickets || submitAttempted ? errors.tickets : undefined
          }
        />
        <Button type="submit">Book</Button>
      </form>
    </div>
  );
};
