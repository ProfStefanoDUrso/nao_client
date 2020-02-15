import React,{Component} from 'react';
import { Form,FormControl,Button } from 'react-bootstrap';

class SearchForm extends React.Component {
    render() {
        return (
            <div>
                <Form inline>
                    <FormControl type="text" placeholder="Search" />
                    <Button type="submit">Cerca</Button>
                </Form>
            </div>
        )
    }
}

export default SearchForm;