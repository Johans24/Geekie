import './Geekie.css';
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/series/Series";
import Movies from "./pages/movies/Movies";
import MediaList from './pages/general/MediaList';
import { useEffect } from 'react';
import useSetApiConfig from './sharedHooks/useSetApiConfig';


function Geekie() {
  const { loadApiConfig } = useSetApiConfig();
  useEffect(() => {
    loadApiConfig();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div id="page" className="container mx-auto mt-32">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/series" element={ <Series /> } />
          <Route path="/movies" element={ <Movies /> } />
          <Route path="/results/:searchQuery" element={ <MediaList /> } />
          <Route path="/results/:searchQuery/:page" element={ <MediaList /> } />
        </Routes>
      </div>
    </div>
  );
}

export default Geekie;
