import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MenuBar } from './Components/MenuBar/MenuBar';
import { Home } from './Views/Home/Home';
import { Project } from './Views/Project/Project';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='https://regevt.github.io/Portfolio/'>
        <MenuBar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/:id' Component={Project} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
