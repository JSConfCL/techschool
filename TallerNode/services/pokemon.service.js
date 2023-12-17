const savedPokemon = [
    {
        id: 1,
        name: 'Pikachu',
        type: 'Electric',
        availableForTrade: true,
        trainerId: 1
    },
];

class PokemonService {
    savePokemon(data){
        const received = this.getRandomPokemon(data.trainerId);
        if(received){
            received.availableForTrade = false;
            savedPokemon.splice(savedPokemon.indexOf(received), 1);
            savedPokemon.push(received);
            data.availableForTrade = false;
            savedPokemon.push(data)
            return received;
        }  
    }

    getSavedPokemon(){
        return savedPokemon;
    }

    getRandomPokemon(trainerId){
        return savedPokemon.find(
            pokemon => (pokemon.availableForTrade === true) && 
            (pokemon.trainerId !== trainerId)
        );
    }
}

module.exports = {
    PokemonService
}