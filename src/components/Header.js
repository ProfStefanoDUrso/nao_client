import React,{Component} from 'react';
import { Image } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 class="display-3">Servizio Prenotazione Biblioteca</h1>
                <Image src="./img/casadellacultura.jpg" />
            </div>
        )
    }
}

export default Header;