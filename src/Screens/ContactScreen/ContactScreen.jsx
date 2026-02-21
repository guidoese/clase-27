import React, { useContext } from "react";
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar";
import { useParams } from "react-router";
import { ContactsContext } from "../../Context/ContactContext";
import { GoArrowLeft } from "react-icons/go";

export default function ContactScreen() {
  const { contacts } = useContext(ContactsContext);
  const { contact_id } = useParams();
  const contact_selected = contacts.find(
    (contact) => Number(contact.id) === Number(contact_id),
  );

  return (
    <div className="app-container">
      <ContactSidebar />
      <main className="chat-area">
        {!contact_selected ? (
          <div className="chat-empty">
            <h1>El contacto seleccionado no existe</h1>
          </div>
        ) : (
          <div className="chat-panel">
            <header className="chat-header">
              <div className="arrow-left-back">
                <GoArrowLeft />
              </div>
              <div className="contact-title">
                <h2>{contact_selected.name}</h2>
              </div>
            </header>
            <div className="messages-list">
              {contact_selected.messages.map((message) => {
                return (
                  <div
                    key={message.id}
                    className={
                      message.send_by_me
                        ? "message message-sent"
                        : "message message-received"
                    }
                  >
                    <p className="message-text">{message.text}</p>
                    <span className="message-time">{message.time}</span>
                  </div>
                );
              })}
            </div>
            <form className="chat-input">
              <textarea placeholder="Escribe un mensaje..." />
              <button type="submit">Enviar</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
