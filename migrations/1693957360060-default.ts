import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693957360060 implements MigrationInterface {
    name = 'Default1693957360060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photos" ("id" SERIAL NOT NULL, "filename" character varying(100) NOT NULL, "bikeId" integer, CONSTRAINT "PK_5220c45b8e32d49d767b9b3d725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "idcategory" integer`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_e72de6200ed1d891ff2a70fc758" FOREIGN KEY ("bikeId") REFERENCES "bikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_0ba7ed606b8aaff2615de060bd3" FOREIGN KEY ("idcategory") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_0ba7ed606b8aaff2615de060bd3"`);
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_e72de6200ed1d891ff2a70fc758"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "idcategory"`);
        await queryRunner.query(`DROP TABLE "photos"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
