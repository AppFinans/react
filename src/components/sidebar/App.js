import React from 'react';
import {
  Link
} from 'react-router-dom';

export default function App ( props ) {
    return (


    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon">
          <img src="img/logo1.png" class="mw-100" alt="Finans"/>
        </div>
        <div class="sidebar-brand-text mx-3"></div>
      </a>

      
      
      <hr class="sidebar-divider"/>

     
      <div class="sidebar-heading">
        Geral
      </div>

      
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i class="fas fa-fw fa-dollar-sign"></i>
          <span>Financeiro</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Movimentação Financeira</h6>
            <Link className="collapse-item" to="/lancamentos">Inserir Lancamentos</Link>
            <Link className="collapse-item" to="/consulta_lancamentos">Consultar Lançamentos</Link>
            <Link className="collapse-item" to="/caixas">Inserir Caixas</Link>
            <Link className="collapse-item" to="/consulta_caixas">Consultar Caixas</Link>
          </div>
        </div>
      </li>

      
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fas fa-fw fa-search"></i>
          <span>Consultas</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Consultas gerais</h6>
            <Link className="collapse-item" to="/visao_geral">Visão Geral</Link>
            <Link className="collapse-item" to="/balancete">Balancete</Link>
            <Link className="collapse-item" to="/analise_financeira">Analise Financeira</Link>
            <Link className="collapse-item" to="/extrato.html">Extrato</Link>
          </div>
        </div>
      </li>

      
      <hr class="sidebar-divider"/>

      
      <div class="sidebar-heading">
        Cadastros
      </div>

      
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i class="fas fa-fw fa-folder-plus"></i>
          <span>Cadastro Gerais</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Dados Bancários</h6>
            <Link className="collapse-item" to="/conta_bancaria">Contas Bancárias</Link>
            <Link className="collapse-item" to="/plano_de_contas">Plano de Contas</Link>
            <Link className="collapse-item" to="/sub_contas">Sub Contas</Link>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Cadastro de Histórico</h6>
            <Link className="collapse-item" to="/404">Histórico Padrão</Link>
            <Link className="collapse-item" to="/404">Beneficiários</Link>
          </div>
        </div>
      </li>

      
      <hr class="sidebar-divider"/>

      
      <div class="sidebar-heading">
        Utilitários
      </div>

      
      <li class="nav-item">
        <Link className="nav-link" to="/mudanca_senha">
          <i class="fas fa-fw fa-key"></i>
          <span>Mudança de Senha</span></Link>
      </li>

      
      <li class="nav-item">
        <Link className="nav-link" to="/suporte">
          <i class="fas fa-fw fa-question-circle"></i>
          <span>Suporte</span></Link>
      </li>

      
      <hr class="sidebar-divider d-none d-md-block"/>

      
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
);
}