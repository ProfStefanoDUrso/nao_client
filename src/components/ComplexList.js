import React,{Component} from 'react';
import { ListGroup } from 'react-bootstrap';

const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];

class ComplexList extends React.Component {
    render() {
        return (
            <ListGroup>
                {list.map(item => (
                <ListGroup.Item key={item.id}>
                    <div>{item.id}</div>
                    <div>{item.firstname}</div>
                    <div>{item.lastname}</div>
                    <div>{item.year}</div>
                </ListGroup.Item>
                ))}
            </ListGroup>
        )
    }
}

export default ComplexList;