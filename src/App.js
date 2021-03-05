import React from 'react';
import './App.css';
import HomePage from "../src/pages/homepage/homepage.component.jsx"
import { Route, Link } from "react-router-dom";

const Test = (props)=> {
  console.log(props)
  return <div>
    <h1>this is a test page</h1>
    <Link to={`${props.match.url}/13`}>to topic 13</Link>
    <Link to={`${props.match.url}/17`}>to topic 17][</Link>
  </div>

}

const TestId = (props)=>{
  console.log(props)
  return <div>
    <h1>this is a test id and the id is {props.match.params.testid} </h1>
    <button onClick={()=> props.history.push('/test')}>to test</button>
    
  </div>
}
  




function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/test' component={Test} />
      <Route exact path='/test/:testid' component={TestId} />



    </div>
  );
}

export default App;
