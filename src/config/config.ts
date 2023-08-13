import 'dotenv/config';

const config = {
  cat_api: {
    url: process.env.CAT_API_URL,
  },
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};

export default config;
