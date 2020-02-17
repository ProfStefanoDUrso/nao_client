import React,{Component} from 'react';
import { Image } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 className="display-4">Servizio Prenotazione Biblioteca</h1>
                <Image src="./img/casadellacultura.jpg" fluid />
            </div>
        )
    }
}

export default Header;