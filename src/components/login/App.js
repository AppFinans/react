import React from 'react';
import{
    Link
} from 'react-router-dom';

export default function App ( props ) {
    return (

        <div className="container">

       
        <div className="row justify-content-center">
    
          <div className="col-xl-10 col-lg-12 col-md-9">
    
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image p-0">
                    <div style="background-color: rgba(0,0,0,0.7)" className="w-100 h-100 text-center pt-5">
                      <img className="mt-5 mw-100" src="img/logo1.png" alt="Finans"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Bem Vindo!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Digite seu Login..."/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Senha..."/>
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck"/>
                            <label className="custom-control-label" for="customCheck">Lembrar-me</label>
                          </div>
                        </div>
                        <Link to="Home" className="btn btn-primary btn-user btn-block">
                          Login
                        </Link>
                        <hr/>
                       
                      </form>
                      <hr/>
                      <div className="text-center">
                        <Link className="small" to="forgot-password.html">Esqueceu sua Senha?</Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="register.html">Criar Conta</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
    
        </div>
    
      </div>

      
    );
}