import './App.css';
import NavigationBar from './components/navbar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <><div>
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>

    </div>
    </>
  );
}

export default App;
