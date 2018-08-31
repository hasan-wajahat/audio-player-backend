
# Audio Player Backend Service
A song API service, build in Express and MongoDB.
The whole app is Dockerized for ease of use.

## To Start App 
Head to project root directly  and run:
```
docker-compose up
```
This will do the following:
- Clone **Node-9** and **MongoDb**.
- Install all required npm packages.
- Transpile code using **Babel**.
- Watch code using **nodemon**.
- Starts server at 3000 port by default, can be configured.

## Environment Details
A **.env** must be created for DB usage and future AWS usage.
An example for that can be found in **.env.example**.

## Routes
|*Route* | *Details* | *Method* |
--- | --- | --- |
`/api/songs` | Gets list of all songs | GET
`/api/songs/:id`| Gets a single song | GET

## DB Details
We are using **MongoDB** for our data management. The Orm being used is **Mongoose**. To set the DB of own choice use the `DB_URL` field in `.env` file.
Currently data is not persisted and fresh entries are loaded using `songs.json`.

## Highlights
- Whole App completely Dockerized.
- Proper backend service created instead of using static json files.
- Babel added to project to add the ability to use features such ES6 `import`.
- Files are hosted at AWS and loaded directly from there.

## Missing Stuff & Possible Improvements
- Lacks JWT authentication.
- No logic added to add or delete songs.
- Folder structure could be improved.
- Though AWS can be used in the app and basic infrastructure was added but currently it's not being utilized due to little need.