import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

import './Contatta.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    }
  }));

function Contatta() {
  const classes = useStyles();
  const [oggetto, setOggetto] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [messaggio, setMessaggio] = useState('');

  const onChangeOggetto = (event) => {
    setOggetto(event.target.value);
  };

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeMessaggio = (event) => {
    setMessaggio(event.target.value);
  };


  const handleSubmit = e => {
      e.preventDefault();
      console.log( 'name= '+ nome +', mail= '+ email +', subject= '+ oggetto +', body= '+ messaggio );
      let data = JSON.stringify({
          email : email, 
          nome: nome, 
          oggetto: oggetto, 
          messaggio: messaggio,
      })
      axios({
        method: 'POST',
        url: 'http://localhost:8001/send',
        headers: {
          'Access-Control-Allow-Origin':  '*',
          'Access-Control-Allow-Headers':  'Content-Type, X-Auth-Token, Authorization, Origin',
          'Access-Control-Allow-Methods':  '*',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data  
      }).then((response) =>{
        console.log(response.data);
        if (response.status === 201) {
          alert("Messaggio inviato.")
          this.resetForm()
        } else {
          alert("Si è verificato un errore. Controlla i dati e riprova.")
        }
      }, (error) => {
        console.log(error);
      })
  }

    return (
      <section className="home">
        <div className="container contact-form">
        <h2>Richiedi un contatto</h2>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfmj5cRY0XkdXUcgAKyi2Z6105JPCpvc714KmZQN77T0CpF4w/formResponse" method="post">
          <div className="form-element">
            <span>Nome</span>
            <input type="text" name="entry.2021938626" required></input>
          </div>
          <div className="form-element">
            <span>Email</span>
            <input type="email" name="entry.1008169583" required></input>
          </div>
          <div className="form-element">
            <span>Telefono</span>
            <input type="text" name="entry.613311776" required></input>
          </div>
          <div className="form-element">
            <span>Messaggio</span>
            <textarea rows="8" name="entry.963690034" />
          </div>
            <button type="submit">Invia Messaggio</button>
        </form>
          {/* <h2>Richiedi un contatto</h2>
          <form onSubmit={handleSubmit} noValidate autoComplete="off" method="POST" id="contact-form">
            <input type="hidden" name="_token" id="csrf-token" value="{{ csrf_token() }}" />
            <input placeholder="Email" value={email} onChange={onChangeEmail} required />
            <input placeholder="Nome e Cognome" value={nome} onChange={onChangeNome} required />
            <select name={oggetto} defaultValue={'non specificato'} onChange={onChangeOggetto}>
              <option value={'non specificato'} disabled>Oggetto richiesta</option>
              <option value={'lezioni canto'}>Lezioni di Canto Moderno</option>
              <option value={'lezioni piano'}>Lezioni di Piano Complementare</option>
              <option value={'lezioni solfeggio'}>Lezioni di Solfeggio</option>
              <option value={'lezioni armonia'}>Lezioni di Armonia</option>
              <option value={'collaborazione'}>Arrangiamenti / Collaborazioni</option>
            </select>
            <textarea placeholder="Messaggio" rows="10" value={messaggio} onChange={onChangeMessaggio} required />
            <button type="submit" form="contact-form">Invia</button>
          </form> */}
        </div>
      </section>
    )
}

export default Contatta;
