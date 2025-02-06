import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('goma_jeans', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

export default sequelize;