import React, { useContext } from "react";
import { ContactsContext } from "../../Context/ContactContext";
import { Link } from "react-router";

export default function ContactSidebar() {
  //useContext es un hook que nos permite consumir el contexto
  //Recibe por parametro el contexto que queremos consumir
  // Una vez consumido me traera el valor del value del contexto
  const { contacts, favorite_name } = useContext(ContactsContext);
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>WhatsApp Clone</h2>
        <h4>{favorite_name}</h4>
      </div>
      <div className="contacts-list">
        {contacts.map((contact) => {
          return (
            <Link
              to={`/contact/${contact.id}`}
              key={contact.id}
              className="contact-item"
            >
              <img
                className="contact-avatar"
                src={contact.porfile_picture}
                alt={contact.name}
              />
              <div className="contact-meta">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-time">
                  {contact.last_time_conection}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
