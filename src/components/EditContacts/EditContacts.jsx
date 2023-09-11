import React, { useState } from "react";

const EditContacts = (props) => {
  let [name, setName] = useState(props.editContact.name);
  let [image, setImage] = useState(props.editContact.image);
  let [phone, setPhone] = useState(props.editContact.phone);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.image = image;
    contact.phone = phone;

    props.handleSaveEditedContact(contact);

    setName("");
    setImage("");
    setPhone("");
  }

  return (
    <div>
      <input
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="image"
        value={image}
      />
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Number of phone"
        value={phone}
      />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default EditContacts;
