import React from 'react';
import Logo from '../logo/App';

export default function App ( props ) {
    return (
      <div className="d-flex my-sm-5 py-sm-3">
        <div className="mx-auto mw-xs p-2 p-sm-4 text-center">
          <div className="py-3">
                <h1><i className="fa fa-envelope"></i> Fale conosco</h1> 
          </div>
          
          <div className="col-12">
          <div className="col-12-col-md-4">
            <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-envelope"></i></a>
            <p> raphael.rbinformatica@gmail.com</p>
            <p> lizejr@globo.com</p>
         </div>
         <div className="col-12-col-md-4 text-small">
            <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fab fa-whatsapp"></i></a>
            <p>Raphael: (21)98865-6500</p>
            <p>Lize: (21)98536-1575</p>
         </div>
            
          </div>
        </div>
      </div>
    );
}