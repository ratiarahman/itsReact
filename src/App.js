// import logo from './logo.svg';
import './App.css';
import Table from './Table';

function App() {
  const lists = [
    {
      name: 'Ratia',
      job: 'Frontend Developer'
    },
    {
      name: 'Sadman',
      job: 'Backend Developer'
    }
  ]
  return (
    <div className="container">
      <h1>Hello, React!</h1>
      {/* {lists.map((item) => {
        return( <Table head='NAME' title='TITLE' name={item.name} job={item.job} />);
      })} */}
      <Table Lists={lists} />
    </div>
  );
}

export default App;



















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