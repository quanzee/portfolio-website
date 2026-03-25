import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ScrollToTop from './components/ScrollToTop';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
    {/* placing this component here ensures that every time a new page is loaded, the scroll position resets to the top */}
      <ScrollToTop /> 
      <Routes>
        {/*The main landing page */}
        <Route path="/" element={<Home />} />

        {/* The "Sub-pages" */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App