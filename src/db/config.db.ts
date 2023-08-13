import config from '../config/config';

export const DatabaseConfiguration = `mongodb+srv://${config.db.user}:${config.db.password}@trobbit-db.xvpi0je.mongodb.net/?retryWrites=true&w=majority`;
