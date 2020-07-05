import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Search = (props) => {
   const [state, setState] = useState({
      description: '',
      location: '',
      full_time: false
   });

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      if (name === 'full_time') {
         setState((prevState) => ({ ...state, [name]: !prevState.full_time }));
      } else {
         setState({ ...state, [name]: value });
      }
   };

   const handleSearch = (event) => {
      event.preventDefault();
      console.log(state);
   };

   return (
      <div className="search-section">
         <Form className="search-form" onSubmit={handleSearch}>
            <Row>
               <Col>
                  <Form.Group controlId="description">
                     <Form.Control
                        type="text"
                        name="description"
                        value={state.description || ''}
                        placeholder="Enter search term"
                        onChange={handleInputChange}
                     />
                  </Form.Group>
               </Col>
               <Col>
                  <Form.Group controlId="location">
                     <Form.Control
                        type="text"
                        name="location"
                        value={state.location || ''}
                        placeholder="Enter location"
                        onChange={handleInputChange}
                     />
                  </Form.Group>
               </Col>
               <Col>
                  <Button variant="primary" type="submit" className="btn-search">
                     Search
                  </Button>
               </Col>
            </Row>
            <div className="filters">
               <Form.Group controlId="full_time">
                  <Form.Check
                     type="checkbox"
                     name="full_time"
                     className="full-time-checkbox"
                     label="Full time only"
                     checked={state.full_time}
                     onChange={handleInputChange}
                  />
               </Form.Group>
            </div>
         </Form>
      </div>
   );
};

export default Search;

// in this file, we have added two input text fields to get the description and location from the user and added a checkbox to get only full-time jobs.
// Also added an onChange handler to each input field to update the state value