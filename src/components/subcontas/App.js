import React from 'react';

export default function App ( props ) {
    return (

      <div class="container mw-sm">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800"></h1>
        </div>

        
        <div class="row"> -->
            <div class="container">
                <div class="row">
                  <div class="col-12 mb-5">
                    <h1 class="display-sm-4">
                      <small>
                        Sub Conta
                      </small>
                    </h1>
                  </div>
                </div>

                <form
                  class="row"
                  action=""
                  method="POST"
                >

                  
                <div class="col-12">
                  <label class="my-2 d-block">
                    <small>
                      Plano de Conta
                    </small>
                    <select
                      name="conta"
                      class="form-control"
                    >
                      <option selected>Selecione o tipo:</option>
                      <option value="000000">Dinheiro</option>
                      <option value="000001">Salario Funcionarios</option>
                      <option value="000002">Diversos</option>
                    </select>
                  </label>
                </div>
                  

                                      
                  <div class="col-12 col-sm-6">
                      <label class="my-2 d-block">
                        <small>
                          Numero 
                        </small>
                        <input type="text" name="doc" class="form-control" />
                      </label>
                  </div>

                  

                  <div class="col-12 col-sm-6">
                      <label class="my-2 d-block">
                        <small>
                          Descrição 
                        </small>
                        <input type="text" name="beneficiario" class="form-control" />
                      </label>
                  </div>

                  
                  
                  <div class="col-12 d-flex">
                    <div class="my-auto p-3">
                      <button class="btn btn-success d-flex btn-block">
                        <span class="m-auto">
                          Salvar
                        </span>
                        <span class="pl-1 m-auto">
                          <i class="fas fa-check"></i>
                        </span>
                      </button>
                    </div>
                    <div class="my-auto p-3">
                      <button class="btn btn-danger d-flex btn-block">
                        <span class="m-auto">
                          Cancelar
                        </span>
                        <span class="pl-1 m-auto">
                          <i class="fas fa-times"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                  
                </form>

              </div>
          
          </div> 

        <div class="col-lg-6 mb-4">

        </div>
    </div>
    );
}