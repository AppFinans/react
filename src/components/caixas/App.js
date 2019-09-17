import React from 'react';

export default function Caixas () {
    return (
     <div class="container">
        <div class="row">
          <div class="col-12 mb-5">
            <h1 class="display-sm-4">
              <small>
                Lançamento de Caixas
              </small>
            </h1>
          </div>
        </div>

        <form
          class="row"
          action=""
          method="POST"
        >

        <div class="col-12 col-sm-6">
          <label class="my-2 d-block">
            <small>
              Data
            </small>
            <input type="date" name="data" class="form-control" />
          </label>
         </div>

          <div class="col-12 col-sm-6">
              <label class="my-2 d-block">
                <small>
                  Turno
                </small>
                <select
                  name="conta"
                  class="form-control"
                >
                  <option selected>Selecione o turno...</option>
                  <option value="000001">Almoço</option>
                  <option value="000002">Jantar</option>
                </select>
              </label>
          </div>

          <div class="col-12">
            <hr/>
          </div>


          
          <div class="col-12 col-sm-4">
              <label class="my-2 d-block">
                <small>
                  Dinheiro
                </small>
                <input type="text" name="doc" class="form-control" />
              </label>
          </div>

          <div class="col-12 col-sm-4">
            <label class="my-2 d-block">
              <small>
                Carta de Crédito
              </small>
              <input type="text" name="doc" class="form-control" />
            </label>
          </div>

          <div class="col-12 col-sm-4">
              <label class="my-2 d-block">
                <small>
                  Carta de Débito
                </small>
                <input type="text" name="beneficiario" class="form-control" />
              </label>
          </div>

          <div class="col-12 col-sm-4">
              <label class="my-2 d-block">
                <small>
                  Cheque
                </small>
                <input type="text" name="descricao" class="form-control" />
              </label>
          </div>

          <div class="col-12 col-sm-4">
            <label class="my-2 d-block">
              <small>
                Ticket
              </small>
              <input type="text" name="descricao" class="form-control" />
            </label>
          </div>

          <div class="col-12 col-sm-4">
            <label class="my-2 d-block">
              <small>
                Pagamentos Online
              </small>
              <input type="text" name="descricao" class="form-control" />
            </label>
          </div>

          <div class="col-12 col-sm-4">
            <label class="my-2 d-block">
              <small>
                A Receber
              </small>
              <input type="text" name="descricao" class="form-control" />
            </label>
          </div>

          <div class="col-12">
            <hr/>
          </div>

          <div class="col-12 col-sm-6">
            <label class="my-2 d-block">
              <small>
                Nº de Pessoas Atendidas
              </small>
              <input type="text" name="descricao" class="form-control" />
            </label>
          </div>

          <div class="col-12 col-sm-6">
              <label class="my-2 d-block">
                <small>
                  Diferença de Caixa
                </small>
                <input type="text" name="valor" class="form-control" />
              </label>
          </div>

          <div class="col-12">
            <hr/>
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
 
  

    );
}