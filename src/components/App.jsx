import { Component } from 'react';
import { nanoid } from 'nanoid';
import Wraper from './Wraper/Wraper';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
}

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  }

  componentDidMount() {
    const stringifieldContacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(stringifieldContacts) || [];
    // const parsedContacts = JSON.parse(stringifieldcontacts) ?? [];
    this.setState({ contacts: parsedContacts });
   
    
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }
    const checkLocal = JSON.parse(localStorage.getItem('contacts'));
    // console.log(checkLocal);
    if (!(checkLocal && checkLocal.length)) {
      localStorage.removeItem('contacts');
    }
  }

  formAddContact = contactData => {
    // console.log(contactData)
    // console.log(this.state.contacts)
    const contact = { id: nanoid(), ...contactData };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleOnChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  onRemoveContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContact = this.getFilteredContact();
    return (
      <>
        <Wraper
          formAddContact={this.formAddContact}
          value={this.state.filter}
          handleOnChangeFilter={this.handleOnChangeFilter}
          filteredContact={filteredContact}
          contactsArray={this.state.contacts}
          onRemoveContact={this.onRemoveContact}
        />
      </>
    );
  }
}
