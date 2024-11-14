import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header/Header';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { Route, Routes } from 'react-router-dom';
import { TovarPage } from './pages/TovarPage/TovarPage';
import { HomePage } from './pages/HomePage/HomePage';



function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/catalog' element={<CatalogPage/>}/>
        <Route path='/catalog/:id' element={<TovarPage/>}/>
      </Routes>      
    </>
  )
}

export default App
