// eslint-disable-next-line
import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {   console.log(setEmail)
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="contact name"
        />
      </label>
      <br />
      <label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$|^(\d{3})\d{7}$"
          placeholder="contact number (###)-(###)-(####)"
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="contact e-mail"
        />
      </label>
      <br />
      <input type="submit" value="Add contact"/>
    </form>
  );
};
