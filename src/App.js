import React from 'react';
import Sidebar from './components/sidebar/App';
import Topbar from './components/topbar/App';
import Footer from './components/footer/App';
import Home from './components/home/App';
import Caixas from './components/caixas/App';
import Lancamentos  from './components/lancamentos/App';
import SubContas from './components/subcontas/App';
import Error from './components/error/App';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div class="d-flex h-100 w-100">
        <aside class="mw-25 bg-primary h-100">
            <Sidebar></Sidebar> 
        </aside>
      <div class="h-100 w-100">
        <header class="w-100 bg-secondary">
          <Topbar></Topbar>
        </header>
        <main class="bg-danger h-100 w-100">
          
          <Switch>
            <Route path="/" exact component= {Home} />
            <Route path="/lancamentos" component ={Lancamentos} />
            <Route path="/caixas" exact component= {Caixas} />
            <Route path="/subcontas" exact component= {SubContas} />
            <Route component={ Error } />
          </Switch>
          
        </main>
        <Footer></Footer>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
