import React from 'react';
import './contacts.css';

function Contacts() {
  return (
    <section className="contacts--container">
      <section className="contacts--title">
        <h1>contatos</h1>
        <hr></hr>
      </section>
      <section className="contacts--person-info">
        <p>Julia Lima</p>
        <p>julia@utopika.com.br</p>
        <p>21. 980837200</p>
      </section>
      <section className="contacts--person-info">
        <p>Rachel Gepp</p>
        <p>rachel@utopika.com.br</p>
        <p>21. 999999999</p>
      </section>
    </section>
  )
};

export default Contacts;
