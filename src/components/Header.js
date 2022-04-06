import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';


function Header() {
  return (
    <header>
      <div >
      <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
        <Link className="navbar-brand" to="/">Chatty</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          {auth().currentUser
            ? <div className="navbar-nav">
             <button className="boton-cerrar" onClick={() => auth().signOut()}>Cerrar sesión</button>
            </div>
            : <div className="navbar-nav">              
            </div>}
        </div>
      </nav>
      </div>
    </header>
  );
}

export default Header;