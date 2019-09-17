import React from 'react';
import Logo from '../logo/App';

export default function App ( props ) {
    return (
      <div className="d-flex my-sm-5 py-sm-3">
        <div className="mx-auto mw-xs p-2 p-sm-4 text-center">
          <div className="py-3">
            <h2 className="m-0 font-weight-bold text-primary d-flex flex-column">
              Bem vindo ao
              <Logo className="bg-primary rounded mx-auto p-2" />
            </h2>
          </div>
          <div className="">
            <p>
              Bem vindo ao Finans o seu controle financeiro Web, aqui você encontra o controle financeiro para você e sua empresa.
            </p>
            <p className="mb-0">Use o menu lateral para navegar entre as opçôes.</p>
          </div>
        </div>
      </div>
    );
}