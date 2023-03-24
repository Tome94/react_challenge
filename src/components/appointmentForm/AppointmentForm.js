import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
const getContactNames =()=> {
  return contacts.map((contact)=>contact.name)
 }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          title="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title of Appointment"
        />
      </label>
      <br />
      <label>
        <ContactPicker 
        name="contact"
        contacts={getContactNames()}
        value={contact}
        onChange={(e)=> setContact(e.target.value)}
        placeholder=" Appointment with "
        />
      </label>
      <br />
      <label>
        <input
          type="date"
          date="date"
          min={getTodayString}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="time"
          time="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <br />
      <input type="submit" value="add appointment"/>
    </form>
  );
};
