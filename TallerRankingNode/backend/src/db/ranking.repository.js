import RecordDTO from './dto/record.dto.js';

export default class RankingRepository {

    constructor(dao) {
        this.dao = dao;
    }

    async addRecord(record) {
        return this.dao.addRecord(new RecordDTO(record));
    }

    async updateRecord(record) {
        return this.dao.updateRecord(new RecordDTO(record));
    }

    async getRanking() {
        return this.dao.getRanking();
    }

    async reset() {
        return this.dao.reset();
    }

    async getRecordByPlayer(player) {
        return this.dao.getRecordByPlayer(player);
    }
}
