import React from 'react';
import './App.css';
import Form, { DisplayForm, Error, ConnectedForm }from './Helloworld';
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" component = {Form} exact />
          <Route path="/form" component = {ConnectedForm}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
