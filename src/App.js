import { useState } from 'react';
import './App.css';
import Input from './Input';

function App() {
  const [value, setValue] = useState(true);
  const handleClick = () => {
    // console.log("clicked");
    setValue(!value);
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className="App">
      <div>
        <h3>Light: {value ? 'on' : 'off'}</h3>
        <button onClick={handleClick}>Click</button>

        <Input type={'text'} placeholder={'First Name'} inputValue={setFirstName} />
        <Input type={'text'} placeholder={'Last Name'} inputValue={setLastName} />
        <h2>
          Full Name: {firstName} {lastName}
        </h2>
      </div>
      <div>
        <h2>hello</h2>
      </div>
    </div>
  );
}

export default App;

// const lists = [
//   {
//     name: 'Ratia',
//     job: 'Frontend Developer'
//   },
//   {
//     name: 'Sadman',
//     job: 'Backend Developer'
//   }
// ]

// <div className="container">
//   <h1>Hello, React!</h1>

//   <Table Lists={lists} />
// </div>
/*{ {lists.map((item) => {
        return( <Table head='NAME' title='TITLE' name={item.name} job={item.job} />);
      })} }*/

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
