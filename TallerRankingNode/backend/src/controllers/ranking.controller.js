import RankingService from '../services/ranking.service.js';
import RankingDaoFactory from '../db/dao/ranking.dao.factory.js';
import RankingRepository from '../db/ranking.repository.js';

const rankingRepository = new RankingRepository(RankingDaoFactory.getDao());
const rankingService = new RankingService(rankingRepository);

export const addRecord = async (req, res) => {
    const { body } = req;
    try {
        // Add a record to the ranking
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

export const getRanking = async (req, res) => {
    try {
        // Get the ranking
    } catch {
        res.status(400).send({ message: error.message });
    }
    
}

export const reset = async (req, res) => {
    try {
        // Reset the ranking
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}
