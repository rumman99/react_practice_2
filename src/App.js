import logo from './logo.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [gg, setgg]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setgg(data))
    
  },[]);

  // const gg= ['ami Ridhan', 'abar ami e Rumman', "ami e aster milford"];
  // // const it= ['cse', 'game', 'football'];
  const it= [{name: "cse"}, {name: 'game'}, {name: 'football'}];

  return (
    <div className="App">
      <header className="App-header">
                
       {/* <Note name={gg[0]} it='cse'></Note>
       <Note name={gg[1]}></Note> */}
       
       {
        gg.map(come => <Note key={come.name} mm= {come.name}></Note>)
       }

       {
        it.map(go => <Note key={go.name} sss= {go.name}> </Note>)
       }

      <Calculate></Calculate>
      </header>
    </div>
    
  );
}


function Note(props){
  const color={
    color:"red",
    backgroundColor:"green"
  }
  const [name, id] = [props.sss];
  const [nam, tak]= [props.mm];
  
  return (
    <div>
      <p style={color}>{nam}</p>
      <h2 style={color}>{name && "I love"} {name}</h2>
    </div>
  );
}

function Calculate(){
  const comment= ['year is:', 'my age is:'];
  const [counter, setCounter] = useState(23);
  const age = () => {setCounter(counter+1)};
  return (
    <div>
      <p> {comment[1]} {counter}</p>
      <button onClick={age}>after 1 year</button>
      <Id x={counter} g={counter} y={comment[0]}></Id>
    </div>
  );
}

function Id(props){
  const afterProps= props.x;
  return (
    <div>
      <p>{props.y} {afterProps+1999}</p>
      <p>ok {props.g/2} </p>
    </div>
  );
}

export default App;
