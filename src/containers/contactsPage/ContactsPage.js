import React, { useState, useEffect } from "react";
export const ContactsPage = ({constacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const {name, phone, email} = useState("");
  const duplicate = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
