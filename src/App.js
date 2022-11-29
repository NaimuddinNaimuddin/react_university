import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom"

import About from './components/About'
import Contact from './components/Contact'
import Courses from './components/Courses'
import Home from './components/Home'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Services from './components/Services'
import ServicesAdmin from './components/admin/ServicesAdmin';
import ListAdmins from './components/admin/ListAdmins';
import AddAdmin from './components/admin/AddAdmins';
import LoginAdmin from './components/admin/LoginAdmin';
import AdminDash from './components/admin/AdminDash';

import { Provider } from "react-redux"
import store from './store'

function App() {

  return (
    <>
      <Provider store={store} >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/services' element={<Services />} />
            <Route path='/posts' element={<Services />} />
            <Route path='/admin/services' element={<ServicesAdmin />} />
            <Route path='/admin/list' element={<ListAdmins />} />
            <Route path='/admin/add' element={<AddAdmin />} />
            <Route path='/admin/login' element={<LoginAdmin />} />
            <Route path='/admin/dashboard' element={<AdminDash />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
