export default class RankingMemoryDao {
    constructor() {
        this.ranking = [];
    }

    async addRecord(record) {
        this.ranking.push(record);
    }

    async updateRecord(record) {
        const index = this.ranking.findIndex((r) => r.player === record.player);
        if (index === -1) return;
        this.ranking[index] = record;
    }

    async getRanking() {
        return this.ranking.sort((a, b) => b.score - a.score);
    }

    async reset() {
        this.ranking = [];
    }

    async getRecordByPlayer(player) {
        const index = this.ranking.findIndex((r) => r.player === player);
        if (index === -1) return null;
        return this.ranking[index];
    }

}
