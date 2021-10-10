import React from "react";
import PropTypes from "prop-types";
import style from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={style.list}>
    {contacts.map((contact) => (
      <li className={style.item} key={contact.id}>
        {contact.name + " : " + contact.number}
        
        
        {
          <button
            className={style.btn}
            type="button"
            name="delte"
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
  })),
}
export default ContactList;