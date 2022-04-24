import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import Projects from '../pages/Projects/Projects'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Background from '../components/Background/Background'
import Games from '../pages/Games/Games'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Background/> 
                <Navbar/>    
                    
                <Routes>                
                    <Route path = "/" element = {<Home/>}></Route>                    
                    <Route path = "/home/" element = {<Home/>}></Route>       
                    <Route path = "/about" element = {<About/>}></Route>
                    <Route path = "/contact" element = {<Contact/>}></Route>
                    <Route path = "/projects" element = {<Projects/>}></Route>
                    <Route path = "/games" element = {<Games/>}></Route>
                </Routes>
                <Footer/>  
            </BrowserRouter>
        </div>
    )
}

export default Router