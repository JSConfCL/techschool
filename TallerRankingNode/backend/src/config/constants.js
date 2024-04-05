if(process.env.NODE_ENV !== 'production'){
    process.loadEnvFile();
}

export const PORT = process.env.PORT || 3000;
export const PERSISTENCE = process.env.PERSISTENCE || 'memory';
export const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/ranking';