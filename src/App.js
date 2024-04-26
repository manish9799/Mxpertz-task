import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import DetailsPage from './Components/DetailsPage';

export const checkStatus =(data)=>{
  if(data == "In Progress"){
      return "#cbcb59"
  }else if(data == "New"){
      return "#2782c7"
  }else if(data == "Completed"){
      return "#37c437"
  }else{
      return "darkgray"
  }
}

function App() {
  return (
    <div className="App">
       <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          < Route path='/' element={<Home />} />
          <Route path='/DetailsPage/:id' element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
      
      
    </div>
  );
}

export default App;
