
import React from 'react';
import { DatePicker} from 'antd';
import Cards from './component/Cards'; 
import './App.css';
import Carousel from './component/Carousel';
import Header from './component/Header';
import {GithubOutlined  } from '@ant-design/icons';
import Home from './component/Home';
import Footer from './component/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from './component/Contact';



function App() {
  const test=(date,dateString )=>{
    console.log(date,dateString);
 
  }
  return (
    <div className="App">
      <GithubOutlined style={{ fontSize: '80px', color: 'Black' }} />
      
      <Header/>
      <Router>
        <Switch>
          <Route path="/contacto">
            <Contact/>
          </Route>

          <Route path="/">
            <Home />
            <DatePicker onChange={test}/>
            <div align="center">
              <h1 style={{color: 'Black'}}>!Top Anime!</h1>
              <h1 style={{color: 'Black'}}>2021  </h1>
            </div>
            <div align='center'>
              <Carousel/>
              <Cards/>
    
            </div>
          </Route>

        </Switch> 
      </Router>
      
      <Footer/>
      <myRate/>
      </div>

  );

}

export default App;
