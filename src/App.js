import React from 'react';
import Navbar from './Navbar/index.js'
import Books from './Books/index.js'
import Reviews from './Reviews/index.js'
import Appearances from './Appearances/index.js';
import Footer from './Footer/index.js'
import './App.css';

const App = () => {
  return (
    <div className="wrap">
        <Navbar/>
        <Books/>
        <Reviews/>
        <Appearances/>
        <Footer/>
        <footer>
          <span>© 2035 by K.Graffith. Powered and Secured by <a href="https://www.wix.com">Wix</a></span>
        </footer>
    </div>
  );
}

export default App;
