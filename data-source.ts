import { DataSource } from "typeorm";

const PgDataSource = new DataSource({
  database: "bdaula",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123",

  synchronize: false,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
});
PgDataSource.initialize()
  .then(() => {
    console.log("Data Source inicializado!");
  })
  .catch((e) => {
    console.error("Erro na inicialização do Data Source:", e);
  });
export default PgDataSource;
