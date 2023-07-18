import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Container from './Wraper/Wraper';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    const getContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(getContacts) || [];
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);

    const checkLocal = JSON.parse(localStorage.getItem('contacts'));
    if (checkLocal?.length <= 0) {
      localStorage.removeItem('contacts');
    }
  }, [contacts]);

  const formAddContact = contactData => {
    const search = contacts.find(contact => contact.name === contactData.name);
    if (search) {
      alert(`${contactData.name} is already in Contacts`);
      return;
    }
    const contact = { id: nanoid(), ...contactData };
    setContacts(prevState => [contact, ...prevState]);
  };

  const handleOnChangeFilter = event => {
    setFiltered(event.currentTarget.value);
  };

  const getFilteredContact = () => {
    const normalizedFilter = filtered.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onRemoveContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContact = getFilteredContact();
  return (
    <>
      <Container
        formAddContact={formAddContact}
        value={filtered}
        handleOnChangeFilter={handleOnChangeFilter}
        filteredContact={filteredContact}
        contactsArray={contacts}
        onRemoveContact={onRemoveContact}
      />
    </>
  );
}
