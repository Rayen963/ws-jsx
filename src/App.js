import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';  // Ensure that Card is imported from react-bootstrap
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import product from './product';

const firstName = "Rayen"; 

const App = () => {
  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '50px' }}>
        <Image />
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Description />
            <Price />
          </Card.Text>
        </Card.Body>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {firstName ? <img src="profil.JPG" style={{width:'8rem',margin:'auto',marginTop:'50px' }} alt="Your Image" /> : null}
        <p>Hello, there!</p>
      </div>
    </div>
  );
};

export default App;

