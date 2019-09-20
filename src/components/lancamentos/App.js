import React from 'react';


export default function App ( props ) {
    return (

        <div class="container">
                  <div class="row">
                    <div class="col-12 mb-5">
                      <h1 class="display-sm-4">
                        <small>
                          Novo Lançamento
                        </small>
                      </h1>
                    </div>
                  </div>

                  <form
                    class="row"
                    action="http://rlbenevides.com.br/appfincanceiro/backend/api/lancamentos"
                    method="POST"
                  >


                    <div class="col-12 d-flex">
                      <div class="d-flex flex-column flex-sm-row border rounded p-2 m-auto mw-xs">
                        <label class="m-3">
                          <input type="radio" name="tipo" value="receita" />
                          <span class="text-success mx-1 text-uppercase">
                            receita
                          </span>
                        </label>
                        <label class="m-3 ml-sm-auto">
                            <input type="radio" name="tipo" value="despesa" />
                            <span class="text-danger mx-1 text-uppercase">
                              despesa
                            </span>
                          </label>
                      </div>
                    </div>

                    <div class="col-12 col-sm-4">
                        <label class="my-2 d-block">
                          <small>
                            Conta bancária
                          </small>
                          <select
                            name="conta"
                            class="form-control"
                            id="opcoesConta"
                          >
                            <option selected>Selecionar conta</option>
                          </select>
                        </label>
                    </div>

                    <div class="col-12 col-sm-4">
                        <label class="my-2 d-block">
                          <small>
                            Plano de conta
                          </small>
                          <select
                            name="plano"
                            class="form-control"
                          >
                              <option selected>Selecionar plano...</option>
                              <option value="100">Receitas</option>
                              <option value="200">Folha de Pagamento</option>
                              <option value="300">Encargos Social</option>
                            </select>
                        </label>
                    </div>

                    <div class="col-12 col-sm-4">
                      <label class="my-2 d-block">
                        <small>
                          Sub Conta
                        </small>
                        <select
                          name="plano"
                          class="form-control"
                        >
                            <option selected>Sub conta...</option>
                            <option value="101">Dinheiro</option>
                            <option value="201">Salário</option>
                            <option value="205">Diversos</option>
                          </select>
                      </label>
                  </div>
                    
                    <div class="col-12 col-sm-4">
                        <label class="my-2 d-block">
                          <small>
                            Documento
                          </small>
                          <input type="text" name="doc" class="form-control" />
                        </label>
                    </div>

                    <div class="col-12 col-sm-4">
                      <label class="my-2 d-block">
                        <small>
                          Historico Padrão
                        </small>
                        <input type="text" name="doc" class="form-control" />
                      </label>
                  </div>

                    <div class="col-12 col-sm-4">
                        <label class="my-2 d-block">
                          <small>
                            Beneficiário
                          </small>
                          <input type="text" name="beneficiario" class="form-control" />
                        </label>
                    </div>

                    <div class="col-12">
                      <hr/>
                    </div>

                    <div class="col-12">
                        <label class="my-2 d-block">
                          <small>
                            Descrição
                          </small>
                          <input type="text" name="descricao" class="form-control" />
                        </label>
                    </div>

                    <div class="col-12 col-sm-3">
                        <label class="my-2 d-block">
                          <small>
                            Data
                          </small>
                          <input type="date" name="data" class="form-control" />
                        </label>
                    </div>

                    <div class="col-12 col-sm-3">
                        <label class="my-2 d-block">
                          <small>
                            Valor
                          </small>
                          <input type="text" name="valor" class="form-control" />
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
           
            
    );
}