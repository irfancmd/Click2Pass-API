import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  port: 3306,
  host: '127.0.0.1',
  username: 'masteruser',
  password: 'WJvPy6G%rqXn',
  // username: 'root',
  // password: 'toor',
  database: 'click2pass_primary',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  // host: '72.167.50.39',
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
