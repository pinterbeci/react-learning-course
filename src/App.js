import Header from './components/Header'
import Header2 from './components/Header2'

import React from 'react'

//create a component with function
{/*function App() {
  const name = "Beci";
  const x = true;
  return (
    <div className="container">
      <h1>
        Hello From React!
      </h1>
      <h2>Hello, {name}!</h2>
      <h2> X is it true? {x?"Yes":"Nope"} </h2>
     
     // import the Header component, bellow
     
     <Header>

     </Header>
    
    </div>
  );
    */}
{/*
    class App extends React.Component{
      render(){
        return <h1>Hello, this a Component, 
          what created with class!</h1>
      }
    }
  */}

//creating component, with arrow function
const App = () => {

  return (
    <div className="container">
      {/*
      <h2>In bellow, the 'Header' component rendered!</h2>
      <Header title = {'asdasdasd'} ></Header>
      */}
      <Header2></Header2>
    </div>
  )
}
export default App;
