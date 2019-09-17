import React, {
  Fragment
} from 'react';
import Dropdown from '../dropdown/App';
import {
  Link
} from 'react-router-dom';

const navigation = [
  {
    title: "geral",
    menus: [
      {
        title: "Financeiro",
        icon: "fas fa-fw fa-dollar-sign",
        submenus: [
          {
            title: "Movimentação Financeira",
            items: [
              {
                label: "Inserir Lançamento",
                url: "/inserir-lancamento"
              },
              {
                label: "Consultar Lançamentos",
                url: "/consultar-lancamentos"
              },
              {
                label: "Inserir Caixa",
                url: "/inserir-caixa"
              },
              {
                label: "Consultar Caixas",
                url: "/consultar-caixas"
              }
            ]
          }
        ]
      },
      {
        title: "Consultas",
        icon: "fas fa-fw fa-list",
        submenus: [
          {
            title: "Consultas Gerais",
            items: [
              {
                label: "Visão Geral",
                url: "/visao-geral"
              },
              {
                label: "Balancete",
                url: "/balancete"
              },
              {
                label: "Análise Financeira",
                url: "/analise-fincanceira"
              },
              {
                label: "Extrato",
                url: "/extrato"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "cadastros",
    menus: [
      {
        title: "Cadastros Gerais",
        icon: "fas fa-folder-plus",
        submenus: [
          {
            title: "Dados Bancários",
            items: [
              {
                label: "Contas Bancárias",
                url: "/contas-bancarias"
              },
              {
                label: "Plano de Contas",
                url: "/plano-de-contas"
              },
              {
                label: "Sub Contas",
                url: "/sub-contas"
              }
            ]
          },
          {
            title: "Cadastro de Histórico",
            items: [
              {
                label: "Histórico Padrão",
                url: "/historico-padrao"
              },
              {
                label: "Beneficiários",
                url: "/beneficiarios"
              }
            ]
          }
        ]
      }
    ]
  }
]

export default function App ( props ) {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <img src="img/logo1.png" className="mw-100" alt="Finans"/>
        </div>
        <div className="sidebar-brand-text mx-3"></div>
      </Link>

      <hr className="sidebar-divider"/>
     

      {
        // Submenus Financeiro e Consultas
        // incluindo título "Geral"
        navigation.map( ( context, i ) => {
          return (
            <Fragment>
              <div className="sidebar-heading" key={ i }>
                { context.title }
              </div>
              {
                context.menus.map( ( menu, k ) => {
                  return (
                    <li className="nav-item" key={ k }>
                      <Dropdown
                        title={ () => (
                          <div className="nav-link pb-0">
                            <i className={ menu.icon }></i>
                            <span>{ menu.title }</span>
                          </div>
                        ) }
                      >
                        <div className="bg-white mx-3 rounded">
                          <ul
                            className="list-group"
                          >
                            {
                              menu.submenus.map( ( submenu, n ) => {
                                return (
                                  <Fragment key={ n }>
                                    <h6 className="text-center mt-4">
                                      <small className="">
                                        { submenu.title }
                                      </small>
                                    </h6>
                                    {
                                      submenu.items.map( ( item, j ) => {
                                        return (
                                          <li className="list-group-item py-1" key={ j }>
                                            <Link
                                              className=""
                                              to={ item.url }
                                            >
                                              { item.label }
                                            </Link>
                                          </li>
                                        )
                                      } )
                                    }
                                  </Fragment>
                                )
                              } )
                            }
                          </ul>
                        </div>
                      </Dropdown>
                    </li>
                  )
                } )
              }
         
              <hr className="sidebar-divider my-3" />
            </Fragment>
          )
        } )
        // 
      }
      
      <div className="sidebar-heading">
        Utilitários
      </div>

      
      <li className="nav-item">
        <Link className="nav-link" to="/mudanca-de-senha">
          <i className="fas fa-fw fa-key"></i>
          <span>Mudança de Senha</span></Link>
      </li>

      
      <li className="nav-item">
        <Link className="nav-link" to="/suporte">
          <i className="fas fa-fw fa-question-circle"></i>
          <span>Suporte</span></Link>
      </li>

      
      <hr className="sidebar-divider d-none d-md-block"/>


    </ul>
  );
}

