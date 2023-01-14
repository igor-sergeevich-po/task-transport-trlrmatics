import './App.css';
import './style.scss';
import { Header } from './components/Header/Header'
import { UsersProvider } from './components/hoc/UsersProvider';

function App() {
  return (
    <UsersProvider>
      <div className="App">
        <Header />
      </div>
    </UsersProvider>
  );
}

export default App;
