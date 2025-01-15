import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route               
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark'); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has enabled", "success");
      document.title = 'Textset - Dark Mode';
      // here he the code of showing to intresting title bar
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing mode';
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has enabled", "success");
      document.title = 'Textset - Light Mode';
    }
  }
  return (
   <>
   {/* <Navbar/> */}
{/* <Navbar title = "textutils" /> */}
 {/* <Router> */}
<Navbar title = "Textset" aboutText= "About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className ="container my-3">
{/* <Routes> */}
{/* /  /user --> ponents 1 */}
{/* / /homeuser --> component com2 */}
          {/* <Route exact path="/About" element={<About mode={mode}/>}></Route> */}
          {/* <Route exact path="/" element= */}
             <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
          {/* </Routes> */}
        </div>
        {/* </Router> */}
        </>
  );
}
export default App;
