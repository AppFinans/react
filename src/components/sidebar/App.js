import React from 'react';

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
            <a class="collapse-item" href="lancamentos.html">Inserir Lancamentos</a>
            <a class="collapse-item" href="consulta_lancamentos.html">Consultar Lançamentos</a>
            <a class="collapse-item" href="caixas.html">Inserir Caixas</a>
            <a class="collapse-item" href="consulta_caixas.html">Consultar Caixas</a>
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
            <a class="collapse-item" href="index.html">Visão Geral</a>
            <a class="collapse-item" href="balancete.html">Balancete</a>
            <a class="collapse-item" href="analise_financeira.html">Analise Financeira</a>
            <a class="collapse-item" href="extrato.html">Extrato</a>
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
            <a class="collapse-item" href="conta_bancaria.html">Contas Bancárias</a>
            <a class="collapse-item" href="plano_de_contas.html">Plano de Contas</a>
            <a class="collapse-item" href="sub_contas.html">Sub Contas</a>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Cadastro de Histórico</h6>
            <a class="collapse-item" href="404.html">Histórico Padrão</a>
            <a class="collapse-item" href="404.html">Beneficiários</a>
          </div>
        </div>
      </li>

      
      <hr class="sidebar-divider"/>

      
      <div class="sidebar-heading">
        Utilitários
      </div>

      
      <li class="nav-item">
        <a class="nav-link" href="charts.html">
          <i class="fas fa-fw fa-key"></i>
          <span>Mudança de Senha</span></a>
      </li>

      
      <li class="nav-item">
        <a class="nav-link" href="tables.html">
          <i class="fas fa-fw fa-question-circle"></i>
          <span>Suporte</span></a>
      </li>

      
      <hr class="sidebar-divider d-none d-md-block"/>

      
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
);
}