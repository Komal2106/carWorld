import React from 'react'
import Home from './home/Home';
// import Collection from './components/Collection';
import Collection from './components/Collection';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';


function CollectionPage() {
  return (
    <>
      <Navbar />
        <div className="min-h-screen">
            <Collection />
        </div>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/signup" element={<Signup/>} />
            {/* <Route path="/login" element={<Login/>} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App
