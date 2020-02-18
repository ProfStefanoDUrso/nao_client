import React,{Component} from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const api = 'http://polar-hamlet-18838.herokuapp.com';

class ServerList extends React.Component {

  constructor(props) {
  super(props);
    this.state = {
      books: [],
    };
  }
    
  componentDidMount() {

    // const request = async () => {
    //   const response = await fetch(api+path);
      
    //   const data = await response.json();
    //   console.log(data);
    //   this.setState({ books: data.books });
  
    // request();
    // }    
    fetch(api + '/list')
      .then(response => response.json())
      .then(
        data => this.setState({ books: data })
        //data => console.log(data)
        );    
  }

  handleClick(id){
    //alert(id)
    fetch(api + '/book/'+id)
      .then(response => response.json())
      .then(
        //data => this.setState({ books: data })
        data => console.log(data)
        );    

        fetch(api + '/list')
        .then(response => response.json())
        .then(
          data => this.setState({ books: data })
          //data => console.log(data)
          );  
  }

  render() {
    
    return (
        <ListGroup>
            {this.state.books.map(item => (
            <ListGroup.Item key={item.code}>
                <div>Author: {item.author}</div>
                <div>Title: {item.title}</div>
                <div>ISBN Code: {item.code}</div>
                {((item.available == true) && (item.reserved == false)) ? <Button onClick={() => this.handleClick(item.code)}>PRENOTA</Button> : <div>NON DISPONIBILE</div>}
            </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

}

export default ServerList;