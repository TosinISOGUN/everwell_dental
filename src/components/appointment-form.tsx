import { CheckCircle } from "@phosphor-icons/react";
import { useId, useRef, useState, type FormEvent } from "react";

import { reasons, timeWindows } from "@/data/content";

type Errors = Partial<Record<"name" | "contact" | "reason", string>>;

/**
 * Demonstration appointment request form. Deliberately short and non-clinical: no medical history,
 * no insurance identifiers, no sensitive data. Nothing is sent or stored anywhere, and the success
 * state says so honestly.
 */
export function AppointmentForm() {
  const base = useId();
  const id = (name: string) => `${base}-${name}`;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [when, setWhen] = useState<string>(timeWindows[2]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const status = useRef<HTMLDivElement>(null);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!phone.trim() && !email.trim()) {
      next.contact = "Please add a phone number or an email so the practice could reach you.";
    } else if (phone.trim() && !/^[+()\-\s\d]{7,}$/.test(phone.trim())) {
      next.contact = "That phone number doesn't look right. Please check it.";
    } else if (email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) {
      next.contact = "That email address doesn't look right. Please check it.";
    }
    if (!reason) next.reason = "Please choose a reason for your visit.";
    return next;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = (["name", "contact", "reason"] as const).find((k) => next[k]);
      if (first) document.getElementById(id(first === "contact" ? "phone" : first))?.focus();
      return;
    }
    setSending(true);
    // Demonstration only: nothing is transmitted. A short delay shows the loading state.
    window.setTimeout(() => {
      setSending(false);
      setDone(true);
      status.current?.focus();
    }, 700);
  }

  function reset() {
    setName("");
    setPhone("");
    setEmail("");
    setReason("");
    setWhen(timeWindows[2]);
    setMessage("");
    setErrors({});
    setDone(false);
  }

  if (done) {
    return (
      <div ref={status} tabIndex={-1} role="status" className="card p-8 outline-none sm:p-10">
        <CheckCircle size={40} className="text-accent" aria-hidden />
        <h2 className="display-md mt-4">Thank you. This was a demonstration.</h2>
        <p className="mt-3 text-muted">
          No real clinic received your request, and no appointment has been made or confirmed.
          Nothing you typed was sent or stored.
        </p>
        <button type="button" onClick={reset} className="btn btn-ghost mt-6">
          Start another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-6 p-6 sm:p-10">
      <div>
        <label htmlFor={id("name")} className="mb-2 block font-semibold">
          Full name
        </label>
        <input
          id={id("name")}
          className="field"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? id("name-error") : undefined}
        />
        {errors.name && (
          <p id={id("name-error")} className="field-error">
            {errors.name}
          </p>
        )}
      </div>

      <fieldset
        className="grid gap-5 sm:grid-cols-2"
        aria-describedby={errors.contact ? id("contact-error") : undefined}
      >
        <legend className="mb-2 font-semibold">How can we reach you?</legend>
        <div>
          <label htmlFor={id("phone")} className="mb-2 block text-sm text-muted">
            Phone
          </label>
          <input
            id={id("phone")}
            type="tel"
            inputMode="tel"
            className="field"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={!!errors.contact}
          />
        </div>
        <div>
          <label htmlFor={id("email")} className="mb-2 block text-sm text-muted">
            Email
          </label>
          <input
            id={id("email")}
            type="email"
            inputMode="email"
            className="field"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.contact}
          />
        </div>
        {errors.contact && (
          <p id={id("contact-error")} className="field-error sm:col-span-2" role="alert">
            {errors.contact}
          </p>
        )}
      </fieldset>

      <div>
        <label htmlFor={id("reason")} className="mb-2 block font-semibold">
          Reason for your visit
        </label>
        <select
          id={id("reason")}
          className="field"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          aria-invalid={!!errors.reason}
          aria-describedby={errors.reason ? id("reason-error") : undefined}
        >
          <option value="">Choose one</option>
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.reason && (
          <p id={id("reason-error")} className="field-error">
            {errors.reason}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={id("when")} className="mb-2 block font-semibold">
          Preferred time
        </label>
        <select
          id={id("when")}
          className="field"
          value={when}
          onChange={(e) => setWhen(e.target.value)}
        >
          {timeWindows.map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={id("message")} className="mb-2 block font-semibold">
          Anything else? <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id={id("message")}
          rows={3}
          className="field"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby={id("message-note")}
        />
        <p id={id("message-note")} className="mt-2 text-sm text-muted">
          Please don't include health details. This is a demonstration form.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={sending} aria-busy={sending}>
          {sending ? "Sending demo request..." : "Submit Appointment Request"}
        </button>
        <p className="text-sm text-muted">Demonstration only. No real clinic will receive this.</p>
      </div>
    </form>
  );
}
