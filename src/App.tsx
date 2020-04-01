import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FileUploader } from './componnent/fileUploader';
import { Jumbotron } from 'reactstrap';


const App: React.FC = () => {
  return (
    <div >
      <Jumbotron >
  
      <h1> Please upload the picture</h1>

      <p>file will auto upload as soon as you choose it </p>
      
      
      <Router>
        <Switch>
       
          <Route path='/add1' component={FileUploader}/>
        </Switch>
      </Router>
    
      </Jumbotron>
      

    </div>
  );
}

export default App;
