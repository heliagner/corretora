const prompt = require("prompt-sync")({sigint:true});

const corretor = require("./corretor.js");
const imovel = require("./imovel.js");
const cliente = require("./cliente.js");

const db = [];

let ultimoId = 0;

function getIndice(id) {
        const indice = db.findIndex(el => el.id == id);

        if(indice == -1){
            console.log("ID Inválido");
        };

        return indice;
};

function model(id = ++ultimoId) {
    let id_corretor = 0;
    if (corretor.listar()) {
        id_corretor = parseInt(prompt("Digite o ID da corretor: "));
    };

    let id_imovel = 0;
    if (imovel.listar()){
        id_imovel = parseInt(prompt("Digite o ID do imóvel: "));
    };

    let id_cliente = 0;
    if (cliente.listar()) {
        id_cliente = parseInt(prompt("Digite o ID do cliente: "));
    };
    
    if(
        imovel.mostrar(id_imovel) &&
        cliente.mostrar(id_cliente) &&
        corretor.mostrar(id_corretor) &&
        corretor.mostrar(id_corretor).id_corretora ==
        imovel.mostrar(id_imovel).id_corretora
    ){
        return {
            id,
            id_corretor,
            id_imovel,
            id_cliente
        };
    };

    console.log("Dados inválidos");
};

function show(id){
    const el = db.find(el => el.id == id);
    
    return el
};

const criar = () => {
    const novo = model();

    if(novo) {
        db.push(novo);
        console.log("Registro criado com sucesso");
    };
};

const listar = () => {
    if(db.length == 0){
        console.log("Nenhum registro encontrado");
        return false
    };
    
    db.forEach(el => console.log(el));
    
    return true
};

function atualizar() {
    if(listar()){
        const id = parseInt(prompt("Digite o ID que deseja remover: "));
    
        const indice = getIndice(id);

        
        if (indice != -1) {
            const novo = model(id)

            if (novo){
                db[indice] = novo;
                console.log("Atualizado com sucesso");
            };
        };
    };
};

const remover = () => {
    if(listar()){
        const id = prompt("Digite o ID que deseja remover: ");
        
        const indice = getIndice(id);
        
        if (indice){
            db.splice(indice, 1);
            console.log("Removido com sucesso");
        };
    };
};

module.exports = {
    criar,
    listar,
    atualizar,
    remover,
    show
};