import React from "react";
import { Route, Routes } from "react-router";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import ErrorNotFoundScreen from "./Screens/ErrorNotFoundScreen/ErrorNotFoundScreen";
import getContacts from "./services/contactsService";
import ContactsContextProvider from "./Context/ContactContext";

function App() {
  return (
    <div>
      <ContactsContextProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Contact/:contact_id" element={<ContactScreen />} />
          <Route path="*" element={<ErrorNotFoundScreen />} />
        </Routes>
      </ContactsContextProvider>
    </div>
  );
}

export default App;

/* Cuando quiero que una ruta que apunta a cualquier otra direccion random que no me sirve ponngo en path= "*" */
