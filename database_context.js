module.exports = {
    _db: null,
    _client: null,


    _projects: null,
    _projects_collection_name: null,


    initialize: function (database_url, database_name) {
        //const {MongoClient, ObjectId}
        const { MongoClient } = require('mongodb');


        this._client = new MongoClient(database_url);
        this._db = this._client.db(database_name);


        this._projects_collection_name = "portfolio-projects";
        this._projects = this._db.collection(this._projects_collection_name);
    },


    getProjects: async function () {
        const results = this._projects.find({});


        return await results.toArray();
    },
};
