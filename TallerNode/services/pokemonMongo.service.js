const PokemonModel = require('./pokemon.model');

class PokemonMongoService {
    async savePokemon(data) {
        const received = await this.getRandomPokemon(data.trainerId);
        if (received) {
            received.availableForTrade = false;
            await PokemonModel.updateOne({ _id: received._id }, received);
            data.availableForTrade = false;
            await PokemonModel.create(data);
            return received;
        }
    }

    async getSavedPokemon() {
        return await PokemonModel.find();
    }

    async getRandomPokemon(trainerId) {
        return await PokemonModel.findOne({
            availableForTrade: true,
            trainerId: { $ne: trainerId },
        });
    }
}

module.exports = {
    PokemonMongoService,
};
