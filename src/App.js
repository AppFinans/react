import React from 'react';
import Sidebar from './components/sidebar/App';

function App() {
  return (
    <div class="d-flex h-100 w-100">
    <aside class="mw-25 bg-primary h-100">
         <Sidebar></Sidebar> 
    </aside>
    <div class="h-100 w-100">
      <header class="w-100 bg-secondary">
         header
      </header>
      <main class="bg-danger h-100 w-100">
        main
      </main>
    </div>
  </div>
  );
}

export default App;
