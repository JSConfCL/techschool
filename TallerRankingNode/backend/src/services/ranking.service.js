export default class RankingService {
    constructor(rankingRepository) {
        this.rankingRepository = rankingRepository;
    }

    async addRecord(record) {
        const existingRecord = await this.rankingRepository.getRecordByPlayer(record.player);

        if (!existingRecord) {
            return await this.rankingRepository.addRecord(record);
        } else if (record.score > existingRecord.score) {
            return await this.rankingRepository.updateRecord(record);
        } else {
            throw new Error("Record score is same as or lower than existing record");
        }
    }

    async getRanking() {
        const ranking = await this.rankingRepository.getRanking();
        console.log({ ranking })
        return ranking;
    }

    async reset() {
        await this.rankingRepository.reset();
    }
}
