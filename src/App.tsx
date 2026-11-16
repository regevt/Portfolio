import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MenuBar } from './Components/MenuBar/MenuBar';
import { Home } from './Views/Home/Home';
import { Project } from './Views/Project/Project';
import { PortfolioProvider } from './Context/Store';
import { Editor } from './Views/editor/editor';

function App() {
  return (
    <div className="App">
      <PortfolioProvider>
        <HashRouter>
          <MenuBar />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='edit' Component={Editor} />
            <Route path='project/:id' Component={Project} />
          </Routes>
        </HashRouter>
      </PortfolioProvider>
    </div>
  );
}

export default App;
