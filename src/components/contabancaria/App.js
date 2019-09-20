import React from 'react';

export default function App ( props ) {
    return (
        <div className="container-fluid">

         
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800"></h1>
          </div>

         
          <div className="row">
              <div className="container">
                  <div className="row">
                    <div className="col-12 mb-5">
                      <h1 className="display-sm-4">
                        <small>
                          Cadastro Bancário
                        </small>
                      </h1>
                    </div>
                  </div>

                  <form
                    className="row"
                    action=""
                    method="POST"
                  >

                    

                    <div className="col-12 col-sm-6">
                        <label className="my-2 d-block">
                          <small>
                            Tipo Conta
                          </small>
                          <select
                            name="tipoconta"
                            className="form-control"
                          >
                            <option selected>Selecione o tipo:</option>
                            <option value="000000">Corrente</option>
                            <option value="000001">Poupança</option>
                            <option value="000002">Aplicação</option>
                          </select>
                        </label>
                    </div>

                                        
                    <div className="col-12 col-sm-6">
                        <label className="my-2 d-block">
                          <small>
                            Numero Banco
                          </small>
                          <input type="text" name="numerobanco" className="form-control" />
                        </label>
                    </div>

                    

                    <div className="col-12 col-sm-6">
                        <label className="my-2 d-block">
                          <small>
                            Descriçao Conta
                          </small>
                          <input type="text" name="descricaoconta" className="form-control" />
                        </label>
                    </div>

                    <div className="col-12 col-sm-6">
                      <label className="my-2 d-block">
                        <small>
                          Agencia
                        </small>
                        <input type="text" name="agencia" className="form-control" />
                      </label>
                  </div>

                  <div className="col-12 col-sm-6">
                    <label className="my-2 d-block">
                      <small>
                        Numero
                      </small>
                      <input type="text" name="numero" className="form-control" />
                    </label>
                  </div>

                    <div className="col-12">
                      <hr/>
                    </div>

                    <div className="col-12 col-sm-6">
                      <label className="my-2 d-block">
                        <small>
                          Taxa de Desconto %
                        </small>
                        <input type="text" name="taxadedesconto" className="form-control" />
                      </label>
                    </div>

                    <div className="col-12 col-sm-6">
                        <label className="my-2 d-block">
                          <small>
                            Prazo 
                          </small>
                          <input type="text" name="prazo" className="form-control" />
                        </label>
                    </div>

                    <div className="col-12 col-sm-6">
                        <label className="my-2 d-block">
                          <small>
                            Saldo inicial
                          </small>
                          <input type="text" name="saldoinicial" className="form-control" />
                        </label>
                    </div>
                    
                    <div className="col-12 d-flex">
                      <div className="my-auto p-3">
                        <button className="btn btn-success d-flex">
                          <span className="m-auto">
                            Salvar
                          </span>
                          <span className="pl-1 m-auto">
                            <i className="fas fa-check"></i>
                          </span>
                        </button>
                      </div>
                      <div className="my-auto p-3">
                        <button className="btn btn-danger d-flex">
                          <span className="m-auto">
                            Cancelar
                          </span>
                          <span className="pl-1 m-auto">
                            <i className="fas fa-times"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                    
                  </form>

                </div>
            
            </div> 

            <div className="col-lg-6 mb-4">
        </div>
              
      </div>
    );
}