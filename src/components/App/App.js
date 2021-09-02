import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './App.module.css';
import Container from '../Container';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList/';
import Filter from '../Filter';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('Contacts')) ?? '',
  );
  const [filter, setFilter] = useState('');
  const checkName = newName => contacts.find(({ name }) => name === newName);
  const addContact = (name, number) => {
    if (!checkName(name)) {
      const newContact = {
        id: uuidv4(),
        name,
        number,
      };
      setContacts(state => [...state, newContact]);
      return;
    }
    alert(`${name} is already in contacts`);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Container>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </Container>
      {contacts.length > 0 ? (
        <Container>
          <h2 className={s.title}>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contactList={getFilteredContacts()}
            onDeleteContact={deleteContact}
          />
        </Container>
      ) : (
        <Container>
          <h2 className={s.title}>Phone book is empty</h2>
        </Container>
      )}
    </>
  );
}
