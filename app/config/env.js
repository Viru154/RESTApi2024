

const env = {
  database: 'umg_antigua_web5004',
  username: 'umg_antigua_web5004_user',
  password: 'H0057Q0NeiN7MIgCGiOgOyI9uLEugH7A',
  host: 'dpg-cqc7lo08fa8c73ckr1eg-a.oregon-postgres.render.com',
  
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;