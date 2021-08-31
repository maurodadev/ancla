import React from "react";
import { Switch, Route } from "react-router-dom";
import './Body.css';
import Bio from './Bio';
import Contatta from './Contatta';
import Footer from './Footer';

export default function Body() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/bio">
        <Bio />
      </Route>
      <Route path="/lezioni">
        <Lezioni />
      </Route>
      <Route path="/collabs">
        <Collabs />
      </Route>
      <Route path="/media">
        <Media />
      </Route>
      <Route path="/books">
        <Books />
      </Route>
      <Route path="/contact">
        <Contatta />
      </Route>
    </Switch>
  );
}

function Home() {
  return (
    <React.Fragment>
      <section className="home">
        <div className="container homepage">
          <img className="home__img" src="img/home-min.jpg" />
          <span className="home__title">&ldquo; Don't Stop Believing &bdquo;</span>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

function Lezioni() {
  return (
    <section className="home">
      <div className="container lezioni">
        <h2>LEZIONI ONLINE</h2>
        <img id="img-lezioni" src="img/lezioni.jpg" />
        <p>
        La mia didattica è basata sull'esperienza acquisita negli anni: 
        ho spaziato, come cantante e strumentista (suono il piano, le tastiere, l’ukulele e il basso elettrico) in diversi generi musicali. 
        Questo mi consente di insegnare stili diversi. 
        Durante le mie lezioni, inserisco nozioni di teoria e solfeggio (per arrivare alla lettura a prima vista di uno spartito) 
        e di pianoforte di accompagnamento per supportare fondamenti di armonia utili a chi vuole imparare ad usare la propria voce 
        come un vero strumento musicale.
        </p>
        <br/>
        <p>
        Come si svolge una lezione? La prima parte della lezione è dedicata alla tecnica: si parte dal riscaldamento in cui 
        posso valutare i progressi in merito all’applicazione della respirazione diaframmatica, 
        per passare ad esercizi vocali di diverso tipo: trattandosi di lezioni personalizzate e considerando che ogni voce è unica, 
        il percorso è diverso per ciascun allievo. 
        </p>
        <br/>
        <p>
        Per coloro che desiderano apprendere le basi per l’accompagnamento pianistico, una parte della lezione è dedicata a questo. 
        </p>
        <br/>
        <p>
        L’ultima parte degli incontri è dedicata allo studio di un brano, che viene concordato insieme, 
        anche in virtù degli argomenti trattati in tecnica vocale, il fine è quello di metterli in pratica attraverso un brano, 
        questo rende la lezione stimolante e focalizzata sull’obiettivo. 
        </p>
        <br/>
        <p>
        Inoltre è possibile dedicare le lezioni a materie come teoria, solfeggio o armonia.
        </p>
      </div>
    </section>
  );
}

function Collabs() {
  return (
    <section className="home">
      <div className="container">

        <div className="collabs">
          <img src="img/songwriting.jpg" />
          <div className="collabs-text">
            <h3>SONG WRITING</h3>
            <p>
              Scrivo brani su commissione: linea melodica e armonia, con testo in italiano o in inglese. 
              Nei tempi prestabiliti, la consegna del lavoro finale comprenderà lo spartito con melodia e sigle degli accordi e, 
              su richiesta, una demo registrata da me. Contattami in privato per concordare le caratteristiche che vorresti nel brano 
              che canterai, il servizio può essere implementato da incontri di Vocal Coaching per ottenere il massimo dalla tua voce 
              sul brano che scriverò per te. 
            </p>
          </div>
        </div>

        <div className="collabs flex-reverse">
          <img src="img/arrangiamenti.jpg" />
          <div className="collabs-text">
            <h3>ARRANGIAMENTI</h3>
            <p>
              Eseguo su commissione arrangiamenti jazz per fiati, contattami in privato per concordare il tipo di arrangiamento 
              e per ricevere un sample gratuito di 4 battute. 
            </p>
          </div>
        </div>

        <div className="collabs">
          <img src="img/trascrizioni.jpg" />
          <div className="collabs-text">
            <h3>TRASCRIZIONI</h3>
            <p>
              Hai una melodia da trascrivere in notazione musicale? Hai scritto un brano e hai bisogno dello spartito? 
              Offro questo servizio, contattami in privato per avere un’idea sui pacchetti disponibili.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

function Media() {
  return (
    <section className="home">
      <div className="container">
        <h2>MEDIA</h2>
        <p>
        <iframe src="https://open.spotify.com/embed/artist/3DXJKbHvHpy1N5h25BMOn1?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </p>
      </div>
    </section>
  );
}

function Books() {
  return (
    <section className="home">
      <div className="container">
        <h2>I Linguaggi del Rock</h2>
        <p>
          I Linguaggi del Rock è un viaggio che parte dagli anni della rivoluzione, i Sessanta, e arriva agli anni Novanta. 
          In questo lasso temporale si sono susseguiti diversi generi musicali, derivanti dal rock, che si sono evoluti 
          in una inevitabile reciproca influenza fra società e musica. 
          Il rock è stato, attraverso lo stile compositivo, i testi e l’immagine delle Rockstar, un grido di protesta, 
          una dichiarazione di amore verso la vita, la necessità di leggerezza e molto altro.
        </p>
        <a href="https://www.booksprintedizioni.it/libro/Saggistica/i-linguaggi-del-rock?fbclid=IwAR2jf8tHFwhAO0u2v6naNeNsDRbEHkWDMPAlynIFRCZJ9IUw7aYeIhs5y_0" 
        target="_blank">
        <img className="book" src="img/linguaggi_del_rock.jpg" /></a>
      </div>
    </section>
  );
}