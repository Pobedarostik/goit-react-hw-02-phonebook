
import React, { Component } from "react";
import ContactForm from './ContactForm/ContactForm '
import { v4 as uuidv4 } from "uuid";
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'


export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: '',
  };


  forForm = data => {
    const searchSameName = this.state.contacts
      .map((contact) => contact.name)
      .includes(data.name);

    if (searchSameName) {
      alert(`${data.name} is already in contacts`);
    } else if (data.name.length === 0) {
      alert("Fields must be filled!");
    } else {
      const contact = {
        ...data,
        id: uuidv4(),
      };

      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }


  }

  changeFilter = (filter) => {
    this.setState({ filter });
  };


  getContactName = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };


  render() {
    const contactName = this.getContactName();
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onContact={this.forForm} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        {contactName.length > 0 ? (
          <ContactList
            contacts={contactName}
            onRemoveContact={this.removeContact}
          />
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}

      </div>

    );
  }
}
