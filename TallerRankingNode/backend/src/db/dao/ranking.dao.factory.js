import { PERSISTENCE } from "../../config/constants.js";
import RankingMemoryDao from "./memory/ranking.dao.js";
import RankingMongoDao from "./mongo/ranking.dao.js";

export default class RankingDaoFactory {
    constructor() {}

    static getDao() {
        switch (PERSISTENCE) {
            case "memory":
                return new RankingMemoryDao();
            case "mongo":
                return new RankingMongoDao();
            default:
                return new RankingMemoryDao();
        }
    }
}