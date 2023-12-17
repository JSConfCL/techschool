const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    trainerId: {
        type: Number,
        required: true
    },
    transferId: {
        type: Number,
        required: true
    },
    availableForTrade: {
        type: Boolean,
        default: true
    },
    pokemonData: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    level: {
        type: Number,
        required: true
    }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
