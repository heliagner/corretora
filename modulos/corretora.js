const prompt = require("prompt-sync")({sigint:true});

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
    const nome = prompt("Digite o nome: ");

    if(nome != ""){
        return {
            id,
            nome
        };
    };

    console.log("Dados inválidos");
    // ultimoId-- = Queima o ID cada vez que é criado independente de sucesso
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