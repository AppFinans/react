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
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
            <span className="mx-2">Voltar para Página Inicial</span>
          </Link>
        </div>

      </div>
    );
}