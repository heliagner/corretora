const prompt = require("prompt-sync")({sigint:true});
const corretora = require("./corretora.js");

let ultimoId = 0;

function getIndice(id) {
        const indice = db.findIndex(el => el.id == id);

        if(indice == -1){
            console.log("ID Inválido");
        };

        return indice;
};

function model(id = ++ultimoId) {
    const nome = prompt("Digite o nome: ");
    let id_corretora = 0;
    if (corretora.listar()) {
        id_corretora = parseInt(prompt("Digite o ID da corretora"));
    }
    
    if(nome != "" &&
        corretora.show(id_corretora)
    ){
        return {
            id,
            nome,
            id_corretora
        };
    };

    console.log("Dados inválidos");
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
    remover
};