const prompt = require("prompt-sync")();

const corretora = require("./modulos/corretora.js");
const corretor = require("./modulos/corretor.js");
const cliente = require("./modulos/cliente.js");
const imovel = require("./modulos/imovel.js");
const venda = require("./modulos/venda.js")

console.log("GERENCIAMENTO DE CORRETORA DE IMÓVEIS");

while (true) {
  console.log(`
        O que deseja gerenciar?
        1 - Corretora
        2 - Corretor
        3 - Cliente
        4 - Imóvel
        5 - Vendas
        0 - Sair
        `);

  const opcaoEntidade = prompt();

  let continuar;
  switch (opcaoEntidade) {
    case "1":
      continuar = true;
      while (continuar) {
        console.log(`
                    GERENCIAMENTO DE CORRETORA
    
                    1 - Criar
                    2 - Listar
                    3 - Atualizar
                    4 - Remover
                    5 - Sair
                    
                    `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            corretora.criar();
            break;
          case "2":
            corretora.listar();
            break;
          case "3":
            corretora.atualizar();
            break;
          case "4":
            corretora.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "2":
      continuar = true;
      while (continuar) {
        console.log(`
                    GERENCIAMENTO DE CORRETOR
    
                    1 - Criar
                    2 - Listar
                    3 - Atualizar
                    4 - Remover
                    5 - Sair
                    
                    `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            corretor.criar();
            break;
          case "2":
            corretor.listar();
            break;
          case "3":
            corretor.atualizar();
            break;
          case "4":
            corretor.remover();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
      case "3":
        continuar = true;
        while (continuar) {
          console.log(`
                      GERENCIAMENTO DE CLIENTE
      
                      1 - Criar
                      2 - Listar
                      3 - Atualizar
                      4 - Remover
                      5 - Sair
                      
                      `);
  
          const opcaoServico = prompt();
  
          switch (opcaoServico) {
            case "1":
              cliente.criar();
              break;
            case "2":
              cliente.listar();
              break;
            case "3":
              cliente.atualizar();
              break;
            case "4":
              cliente.remover();
              break;
            case "5":
              continuar = false;
              break;
            default:
              console.log("Opcão inválida");
              break;
          };
        };
        break;
        case "4":
          continuar = true;
          while (continuar) {
            console.log(`
                        GERENCIAMENTO DE IMOVEL
        
                        1 - Criar
                        2 - Listar
                        3 - Atualizar
                        4 - Remover
                        5 - Sair
                        
                        `);
    
            const opcaoServico = prompt();
    
            switch (opcaoServico) {
              case "1":
                imovel.criar();
                break;
              case "2":
                imovel.listar();
                break;
              case "3":
                imovel.atualizar();
                break;
              case "4":
                imovel.remover();
                break;
              case "5":
                continuar = false;
                break;
              default:
                console.log("Opcão inválida");
                break;
            };
          };
          break;  
          case "5":
            continuar = true;
            while (continuar) {
              console.log(`
                          GERENCIAMENTO DE VENDAS
          
                          1 - Criar
                          2 - Listar
                          3 - Atualizar
                          4 - Remover
                          5 - Sair
                          
                          `);
      
              const opcaoServico = prompt();
      
              switch (opcaoServico) {
                case "1":
                  venda.criar();
                  break;
                case "2":
                  venda.listar();
                  break;
                case "3":
                  venda.atualizar();
                  break;
                case "4":
                  venda.remover();
                  break;
                case "5":
                  continuar = false;
                  break;
                default:
                  console.log("Opcão inválida");
                  break;
              };
            };
    case "0":
      process.exit(0);
      break;
    default:
      console.log("Opcão inválida");
      break;
  };
};