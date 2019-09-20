import React from 'react';
import{
    Link
} from 'react-router-dom';

export default function App ( props ) {
    return (
<div className="container-fluid">


<div className="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 className="h3 mb-0 text-gray-800">Visão Geral</h1>
  <Link to="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
</div>


<div className="row">

  
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-primary shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Faturamento (Mensal)</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">R$40,000</div>
          </div>
          <div className="col-auto">
            <i className="fas fa-calendar fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-success shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Faturamento (Anual)</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">R$215,000</div>
          </div>
          <div className="col-auto">
            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-info shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
            <div className="row no-gutters align-items-center">
              <div className="col-auto">
                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
              </div>
              <div className="col">
                <div className="progress progress-sm mr-2">
                  <div className="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-warning shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Ultimo Caixa lançado</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">24/08/2019</div>
          </div>
          <div className="col-auto">
            <i className="fas fa-comments fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="row">

  
  <div className="col-xl-8 col-lg-7">
    <div className="card shadow mb-4">
      
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Movimentação Anual</h6>
        <div className="dropdown no-arrow">
          <Link className="dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
            <div className="dropdown-header">Dropdown Header:</div>
            <Link className="dropdown-item" to="#">Action</Link>
            <Link className="dropdown-item" to="#">Another action</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#">Something else here</Link>
          </div>
        </div>
      </div>
      
      <div className="card-body">
        <div className="chart-area">
          <canvas id="myAreaChart"></canvas>
        </div>
      </div>
    </div>
  </div>

  
  <div className="col-xl-4 col-lg-5">
    <div className="card shadow mb-4">
      
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Grafico Pizza</h6>
        <div className="dropdown no-arrow">
          <Link className="dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
            <div className="dropdown-header">Dropdown Header:</div>
            <Link className="dropdown-item" to="#">Action</Link>
            <Link className="dropdown-item" to="#">Another action</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#">Something else here</Link>
          </div>
        </div>
      </div>
      
      <div className="card-body">
        <div className="chart-pie pt-4 pb-2">
          <canvas id="myPieChart"></canvas>
        </div>
        <div className="mt-4 text-center small">
          <span className="mr-2">
            <i className="fas fa-circle text-primary"></i> Direct
          </span>
          <span className="mr-2">
            <i className="fas fa-circle text-success"></i> Social
          </span>
          <span className="mr-2">
            <i className="fas fa-circle text-info"></i> Referral
          </span>
        </div>
      </div>
    </div>
  </div>
</div>


</div>

      
    );
}