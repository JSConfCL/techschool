import Record from "./models/record.js";

export default class RankingMongoDao {
    constructor() {}

    async addRecord(record) {
        try {
            // Create a new record
        } catch (error) {
            console.error("Error adding record: ", error);
            throw error;
        }
    }

    async updateRecord(record) {
        try {
            // Update the record
        } catch (error) {
            console.error("Error updating record: ", error);
            throw error;
        }
    }

    async getRanking() {
        try {
            // Get the ranking
        } catch (error) {
            console.error("Error getting ranking: ", error);
            return [];
        }
    }

    async reset() {
        try {
            // Reset the ranking
        } catch (error) {
            console.error("Error resetting ranking: ", error);
            throw error;
        }
    }

    async getRecordByPlayer(player) {
        try{
            // Get the record by player 
        } catch (error) {
            console.error("Error getting record by player: ", error);
        }
    }
}