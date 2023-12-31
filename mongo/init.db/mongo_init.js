db.createUser({
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
  roles: [
    {
      role: "readWrite",
      db: process.env.MONGO_INITDB_DATABASE,
    },
  ],
});

db.createCollection(process.env.MONGO_INITDB_COLLECTION, {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "User Object Validation",
      required: ["document_id", "username"],
      properties: {
        document_id: {
          bsonType: "string",
          description: "'document_id' must be a string and is required",
        },
        username: {
          bsonType: "string",
          description: "'username' must be a string and is required",
        },
      },
    },
  },
});

db[process.env.MONGO_INITDB_COLLECTION].createIndex(
  { document_id: 1 },
  { unique: true }
);

db[process.env.MONGO_INITDB_COLLECTION].insertMany([
  { document_id: "12345", username: "onehoax" },
  { document_id: "67890", username: "nela" },
]);
