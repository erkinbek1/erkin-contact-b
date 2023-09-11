import React, { useState } from "react";

function AddContact(props) {
  let [name, setName] = useState("");
  let [image, setImage] = useState("");
  let [phone, setPhone] = useState("");

  function handleClick() {
    if (!name.trim() || !image.trim() || !phone.trim()) {
      return alert("Input is empty");
    }
    let newContact = {
      name,
      image,
      phone,
      id: Date.now(),
    };
    setName("");
    setImage("");
    setPhone("");
    props.handleNewContact(newContact);
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
      <button onClick={handleClick}>Add Contact</button>
    </div>
  );
}

export default AddContact;
