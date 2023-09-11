import React from "react";

function ContactsList(props) {
  let style = {
    borderRadius: "30px",
    marginTop: "15px",
    marginBottom: "15px",
    border: "2px solid red",
    padding: "10px",
  };
  let style2 = {
    marginTop: "10px",
  };
  return (
    <div>
      {props.contacts.map((item, index) => (
        <ul key={item.id}>
          <img
            src={item.image}
            alt="image"
            width="200px"
            height="200px"
            style={style}
          />
          <li style={style2}>{item.name}</li>
          <li style={style2}>{item.phone}</li>
          <li style={style2}>
            <button onClick={() => props.handleDeleteContact(item.id)}>
              Delete
            </button>
            <button onClick={() => props.handleEditIndex(index)}>Edit</button>
            <hr style={style2} />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ContactsList;
