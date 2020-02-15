import React,{Component} from 'react';
import { ListGroup } from 'react-bootstrap';

const api = 'http://polar-hamlet-18838.herokuapp.com';
const path = '/list';

class ServerList extends React.Component {

  constructor(props) {
  super(props);
    this.state = {
      books: [],
    };
  }
    
  componentDidMount() {
    fetch(api + path)
      .then(response => response.json())
      .then(data => this.setState({ books: data.books }));
  }

  render() {
    return (
        <ListGroup>
            {this.state.books.map(item => (
            <ListGroup.Item key={item.code}>
                <div>author: {item.author}</div>
                <div>title: {item.title}</div>
                <div>code: {item.code}</div>
                <div>available: {item.available}</div>
            </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

}

export default ServerList;