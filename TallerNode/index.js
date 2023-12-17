const express = require('express');
const { PokemonService } = require('./services/pokemon.service.js')
const app = express();
app.use(express.json());

const pokemonService = new PokemonService();

app.post('/pokemon', (req, res) => {
    const data = req.body;
    const received = pokemonService.savePokemon(data);
    if(received){
        res.send(received)
    } else {
        res.status(404).send({message: 'No hay pokemon disponible'})
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