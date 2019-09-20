import React from 'react';
import Sidebar from './components/sidebar/App';
import Topbar from './components/topbar/App';
import CopyRight from './components/copyright/App';
import Home from './components/home/App';
import Caixas from './components/caixas/App';
import Lancamentos  from './components/lancamentos/App';
import SubContas from './components/subcontas/App';
import PlContas from './components/plcontas/App';
import Suporte from './components/suporte/App';
import ContaBancaria from './components/contabancaria/App';
import VisaoGeral from './components/visaogeral/App';
import Error from './components/error/App';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

function adjustMain () {
  let aside = document.querySelector( "aside" );
  let footer = document.querySelector( "footer" );
  let header = document.querySelector( "header" );
  let main = document.querySelector( "main" );
  if ( aside && footer && header && main ) {
    console.log( main.clientHeight )
    main.clientHeight = aside.clientHeight - footer.clientHeight - header.clientHeight
    console.log( main.clientHeight )
  }
}

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex h-100 w-100">
        <aside className="mw-25 bg-primary h-100">
            <Sidebar></Sidebar> 
        </aside>
        <div
          className="w-100 h-100"
        >
          <header className="w-100">
            <Topbar></Topbar>
          </header>
          <main
            className="w-100"
          >

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/inserir-lancamento" component={Lancamentos} />
              <Route path="/inserir-caixa" exact component={Caixas} />
              <Route path="/visao-geral" exact component={VisaoGeral} />
              <Route path="/sub-contas" exact component={SubContas} />
              <Route path="/plano-de-contas" exact component={PlContas} />
              <Route path="/contas-bancarias" exact component={ContaBancaria} />
              <Route path="/suporte" exact component={Suporte} />
              <Route component={ Error } />
            </Switch>
            
          </main>
          <footer
            className="bg-white w-100 p-4 border-top"
          >
            <CopyRight />
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
