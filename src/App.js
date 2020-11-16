import React,{ useState} from 'react'
import Header from './Components/Header';
import LeftNavBar from './Components/LeftNavBar';
import Recommended from './Components/Recommended'
import SearchPage from './Components/SearchPage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  var [responseVal , setResponse] = useState([])
  var getSearchApi = (respVal)=>{
    setResponse([...respVal])
  }
  return (
    <>
      <Router>
        <Header onSearching={getSearchApi} />
        <LeftNavBar />
        <Switch>
          {/* Home Page */}
          <Route exact path="/" >
            <div id="main_page">
              <Recommended />
            </div>
          </Route>

          {/*---Search Page--  */}
          <Route path="/search/:searchTerm" >
            <div id="main_page">
              <SearchPage videoData={responseVal} />
            </div>
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
