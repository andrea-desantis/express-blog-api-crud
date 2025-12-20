import dino from "../dino.js";
// ----------INDEX----------
function index(req, res) {

    const dinoIndex = dino.map(({ id, title }) => ({ id, title }));

    res.send(dinoIndex);
}

// ----------SHOW----------
function show(req, res) {
    const id = parseInt(req.params.id);
    const dinosauro = dino.find((dino) => dino.id === id);


    if (dinosauro !== undefined) {
        res.json(dinosauro);
    } else{
        res.status(404);
        res.json({
            error:"Not Found",
            message: "Dinosauro non trovato"
        })
    }
}

// ----------STORE----------
function store(req, res) {
    res.send("Creazione nuovo post")
}

// ----------UPDATE----------
function update(req, res) {
    const id = parseInt(req.params.id);
    res.send(`Modifica il post ${id}`)
}

// ----------MODIFY----------
function modify(req, res) {

    const id = parseInt(req.params.id);
    res.send(`Modifica parzialmente alcuni dati del post ${id}`)
}

// ----------DESTROY----------
function destroy(req, res) {
    const id = parseInt(req.params.id);

    const index = dino.findIndex((dinosauro) => dinosauro.id === id);

    // id non trovato
    if( index === -1){
        res.status(404);
        res.json({
            error:"Not Found",
            message: "Dinosauro non trovato"
        });
    } else{ //rimuovo l'elemento
        dino.splice(index, 1);
        res.sendStatus(204)
    }



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