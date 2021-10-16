import './styles/App.css';
import CVInput from './components/CVInput';
import CVDisplay from './components/CVDisplay';

function App() {
  return (
    <div className="app">
      <h1 className="app__header">CV Application</h1>
      <CVInput />
      <CVDisplay />
    </div>
  );
}

export default App;
