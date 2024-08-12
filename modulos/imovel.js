const prompt = require("prompt-sync")({sigint:true});
const corretora = require("./corretora.js");

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
    const bairro = prompt("Digite o bairro: ");
    const numero = prompt("Digite o número: ");
    const rua = prompt("Digite a rua: ");

    let id_corretora = 0;
    if (corretora.listar()) {
        id_corretora = parseInt(prompt("Digite o ID da corretora"));
    } else {
        console.log("Nenhuma corretora encontrada");
    }
    
    if(bairro != "" && numero > 0 & rua != "" &&
        corretora.show(id_corretora)
    ){
        return {
            id,
            bairro,
            numero,
            rua,
            id_corretora
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