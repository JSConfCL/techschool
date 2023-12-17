const express = require('express');
const mongoose = require('mongoose');
const { PokemonServiceFactory } = require('./services/pokemon.service.factory.js');

const app = express();
app.use(express.json());

const mongoDB = true; // cambiar a false para usar el servicio de pokemon.service.js

const pokemonService = new PokemonServiceFactory().getPokemonService(mongoDB);

mongoose.connect('mongodb://localhost/pokemon-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.post('/pokemon', (req, res) => {
    const data = req.body;
    const received = pokemonService.savePokemon(data);
    if (received) {
        res.send(received)
    } else {
        res.status(404).send({ message: 'No hay pokemon disponible' })
    }
});

app.get('/pokemon/trainer/:id', (req, res) => {
    const id = req.params.id;
    // buscar lista de pkmn por trainerId y retornar pkmn intercambiados
});

app.get('/pokemon', (req, res) => {
    res.send(pokemonService.getSavedPokemon())
});

app.put('/pokemon', (req, res) => {
    // editar el pkmn
})

app.listen(8080, () => {
    console.log('servidor funcionando')
})