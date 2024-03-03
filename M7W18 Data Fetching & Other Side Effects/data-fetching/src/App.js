import logo from './logo.svg';
import './App.css';
import DocumentTitle from './components/DocumentTitle';
import SetIntervalComponent from './components/SetInterval';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      <h1>Welcome to our app!</h1>
      {/* <DocumentTitle />
      <SetIntervalComponent /> */}
      <DataFetching />
    </div>
  );
}

export default App;
