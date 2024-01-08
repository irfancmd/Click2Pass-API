import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  // username: 'root',
  // password: 'toor',
  // database: 'click2pass_primary',
  username: 'xpressbdnew_admin',
  password: 'Ha7;1nCjv&w%',
  database: 'xpressbdnew_primary',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
