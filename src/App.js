import logo from './logo.svg';


function App() {
  return ( 
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
    <p>
      {process.env.REACT_APP_API_URL}
    </p>
    </div>
  );
}

export default App;
