import React from "react";
import {Provider} from "react-redux"
import Header from "./components/Header";
import ListSong from "./components/ListSong";
import NavBar from "./components/NavBar";
import NavUser from "./components/NavUser";
import Playing from "./components/Playing";
import { Store } from "./redux/Store";


function App() {
  return (
    <div className="App">

        <Provider store={Store}>
           <div className="app-music">
                <NavBar/>
                <main className="main-page">
                    <Header/>
                    <ListSong/>
                </main>
                <NavUser/>
           </div>
           <Playing/>
        </Provider>
        
    </div>
  )
  ;
}

export default App;
