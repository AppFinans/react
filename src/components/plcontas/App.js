import React from 'react';

export default function App ( props ) {
    return (

        <div className="container mw-sm">

          
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800"></h1>
          </div>

          
          <div className="row">
              <div className="container">
                  <div className="row">
                    <div className="col-12 mb-5">
                      <h1 className="display-sm-4">
                        <small>
                          Plano de Contas
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
                            Numero 
                          </small>
                          <input type="text" name="numero" className="form-control" />
                        </label>
                    </div>

                    

                    <div className="col-12 col-sm-6">
                        <label className="my-2 d-block">
                          <small>
                            Descrição 
                          </small>
                          <input type="text" name="bdescricao" className="form-control" />
                        </label>
                    </div>

                    
                    
                    <div className="col-12 d-flex">
                      <div className="m-auto p-3">
                        <button className="btn btn-success d-flex">
                          <span className="m-auto">
                            Salvar
                          </span>
                          <span className="pl-1 m-auto">
                            <i className="fas fa-check"></i>
                          </span>
                        </button>
                      </div>
                      <div className="m-auto p-3">
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