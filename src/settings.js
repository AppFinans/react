export const navigation = [
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