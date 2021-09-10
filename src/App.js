import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{
        setAlert({
          msg : message,
          type : type
        })

        setTimeout(()=>{
            setAlert(null);
        }, 2000)
  }

  const toggleMode = () =>{
      if(mode === 'light'){
         setMode('dark');
         document.body.style.backgroundColor = '#042743';
         showAlert("The dark mode has been enabled ", "success ");
         document.title = "Editor - darkMode";
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("The light mode has been enabled ", "success ");
        document.title = "Editor - lightMode";
      }

  }

  return (
    
   <>
    {/* <Router> */}
      <Navbar tittle="TextMaker" aboutUs="AboutUs" mode={mode} toggleMode={toggleMode}/>  
      <Alert  alertMsg={alert}/>

      {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          
          {/* <Route  exact path="/"> */}
            <div className="container">
              <TextForm heading="Enter the text to Analyze below" alert={showAlert} mode={mode}/>   
            </div> 
          {/* </Route> */}
      {/* </Switch> */}

    {/* </Router> */}

   </>

  );
}

export default App;
