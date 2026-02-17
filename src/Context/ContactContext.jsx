import { createContext, useState } from "react";
import getContacts from "../services/contactsService";

// Creamos el contexto y lo exportamos porque luego quien quiera consumirlo lo va a necesitar

export const ContactsContext = createContext(
  // Representa el valor inicial del contexto, es decir, lo que va a devolver el contexto por defecto, nos sirve para saber que propiedades va a tener el contexto, aunque luego se van a modificar
  {
    contacts: [],
    favorite_name: "", //agrego la propiedad favorite_name al objeto
  },
  //La funcion createContext, nos crea un objeto vacio en contenido pero con todos las propiedades.
);

/* 
la prop children es una prop reservada de react
Representa a todos los componentes hijos que se encuentran dentro del componente
*/

const ContactsContextProvider = ({ children }) => {
  const contacts = getContacts();
  const [contactsState, setContactsState] = useState(contacts);

  const provider_values = {
    contacts: contactsState,
    favorite_name: "pepe",
  };
  return (
    /* 
    Creamos el proveedor de contexto y pasamos la prop value que es basicamente lo que se podra consumir del contexto 
    */
    <ContactsContext.Provider value={provider_values}>
      {children}
    </ContactsContext.Provider>
  );
};
//Le proveo a todos los hijos(todo lo que este encerrado por ContactsContextProvider los valores de  los contactos)
export default ContactsContextProvider;
