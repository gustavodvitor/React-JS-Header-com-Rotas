import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from './components/Header';
import Erro from './pages/Erro';
function RoutesApp(){
    return(
        
       <BrowserRouter>
       <Header/>
       <Routes>
        <Route path='/home' element={ <Home/> }></Route>
        <Route path = '/sobre' element={<Sobre/>}></Route>
        <Route path = '/contato' element={<Contato/>}></Route>

        <Route path='*' element={<Erro/>}/>
       </Routes>
       
       </BrowserRouter>
    )
}

export default RoutesApp;