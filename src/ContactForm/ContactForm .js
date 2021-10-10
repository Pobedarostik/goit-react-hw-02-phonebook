import React, { Component } from "react";
import PropTypes from "prop-types";
import style from './ContactForm.module.css';

export default class ContactForm extends Component {
    state = {
    contacts: [],
    name: '',
    number: ''
    };
    
    handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
      this.props.onContact(this.state);
      this.setState({ name: "", number: "" });
    }

    
    render() {
   

    return (
     <form className={style.form} onSubmit={this.handleSubmit}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Ivan Ivanov"
          />
        </label>
        <label className={style.label}>
          Number
          <input
            className={style.input}
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="111-11-11"
          />
        </label>
       
         <button className={style.btn} type="submit">
          Add contact
        </button>
        
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string
};