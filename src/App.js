import React from 'react';
import Sidebar from './components/sidebar/App';
import Topbar from './components/topbar/App';
import Footer from './components/footer/App';

function App() {
  return (
    <div class="d-flex h-100 w-100">
    <aside class="mw-25 bg-primary h-100">
         <Sidebar></Sidebar> 
    </aside>
    <div class="h-100 w-100">
      <header class="w-100 bg-secondary">
         <Topbar></Topbar>
      </header>
      <main class="bg-danger h-100 w-100">
        main
      </main>
      <footer>
    <Footer></Footer>
      </footer>
    </div>
  </div>
  );
}

export default App;
