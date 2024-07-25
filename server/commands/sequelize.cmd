@REM Integrate Sequlize with nodejs project
npm install sequelize
npm install --save-dev sequelize-cli
npm i sequelize-cli
npx sequelize-cli init

@REM Some important migration command
0. npx sequelize-cli db:migrate
1. npx sequelize-cli db:migrate:undo:all
2. npx sequelize-cli migration:generate --name user_sessions_association
3. npx sequelize-cli model:generate --name User --attributes name:string
4. npx sequelize-cli seed:generate --name demo-user
5. npx sequelize-cli db:seed:all
6. npx sequelize-cli db:migrate:undo --name 20240513110327-user_profile_association.js
7. npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
8. npx sequelize-cli db:migrate:status

@REM used in project
1. npx sequelize-cli model:generate --name User --attributes name:string,fullName:string,email:string,password:string,phoneNumber:string,isDeleted:smallint,deletedAt:date

2. npx sequelize-cli model:generate --name Address --attributes userId:integer,address1:string,address2:string,address3:string,city:string,state:string,country:string,postalCode:string,isDeleted:smallint,deletedAt:date

3. npx sequelize-cli migration:generate --name user_addresses_association

4. npx sequelize-cli seed:generate --name user

5. npx sequelize-cli seed:generate --name address