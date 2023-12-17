const { PokemonService } = require('./pokemonMongo.service');
const { PokemonMongoService } = require('./pokemonMongo.service');

class PokemonServiceFactory {
    async getPokemonService(mongoDB) {
        if(mongoDB) return new PokemonMongoService();
        return new PokemonService();
    }
}

module.exports = {
    PokemonServiceFactory
}