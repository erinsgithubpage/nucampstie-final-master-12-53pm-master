import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import { CAMPSITES } from './app/shared/CAMPSITES';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import CampsiteZeroPage from './pages/CampsiteZeroPage';
import AboutPage from './pages/AboutPage';



function App() {
  return (
    <div className='App'>
      <Header />
      {/*<Routes>
        <Route path='/' element={<HomePage />}/>
        <Route  path='contact' element={<ContactPage />}/>
        <Route  path='directory' element={<CampsitesDirectoryPage />}/>
        <Route
          path='directory/:campsiteId'
          element={<CampsiteDetailPage />}
          />
  </Routes>*/}
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage campsites={CAMPSITES} />} />
        <Route path='about' element={<AboutPage />} />
        
          {/*<Route path='directory/:campsiteId' element={<CampsiteDetailPage campsites={CAMPSITES} />} />*/}
        <Route path='/directory/0' element={<CampsiteZeroPage />} />
        {/*<Route path='directory/0' campsites={CAMPSITES} />*/}
        <Route path='directory/1' campsites={CAMPSITES} />
        <Route path='directory/2' campsites={CAMPSITES} />
        <Route path='directory/3' campsites={CAMPSITES} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
