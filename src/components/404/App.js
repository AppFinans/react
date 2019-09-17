import React from 'react';
import {
  Link
} from "react-router-dom";
export default function App ( props ) {
    return (

        <div class="container-fluid">

        
        <div class="text-center">
          <div class="error mx-auto" data-text="404">404</div>
          <p class="lead text-gray-800 mb-5">Página não encontrada :(</p>
          <p class="text-gray-500 mb-0">Algo deu errado, recarrege a página ou volte a página inicial...</p>
          <Link to="index.html">&larr; Voltar para Página Inicial</Link>
        </div>

      </div>
    );
}