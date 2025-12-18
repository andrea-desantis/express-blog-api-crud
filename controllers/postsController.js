import dino from "../dino.js";
// ----------INDEX----------
function index(req, res){

    const dinoIndex = dino.map(({ id, title}) => ({ id, title}));

    res.send(dinoIndex);
}

// ----------SHOW----------
function show(req, res){
    const id = parseInt(req.params.id);
    const dinosauro = dino.find((dino) => dino.id === id);

    res.json({
        messaggio: `Dettagli del post${id}`,
        dettagli: dinosauro
    });
}

// ----------STORE----------
function store(req, res){
    res.send("Creazione nuovo post")
}

// ----------UPDATE----------
function update(req, res){
    const id = parseInt(req.params.id);
        res.send(`Modifica il post ${id}`)
}

// ----------MODIFY----------
function modify(req, res){
    
    const id = parseInt(req.params.id);
    res.send(`Modifica parzialmente alcuni dati del post ${id}`)
}

// ----------DESTROY----------
function destroy(req, res){
     const id = parseInt(req.params.id);
        res.send(`Elimina il post ${id}`)
}

const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}


export default controller