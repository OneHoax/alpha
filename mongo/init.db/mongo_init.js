/*
===============================================================
========================== Users ==============================
===============================================================
*/

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

/*
===============================================================
======================= Collections ===========================
===============================================================
*/

// ======================= Roles ===========================

db.createCollection(process.env.ROLES_COLLECTION, {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Role Object Validation",
      required: ["code_name", "ui_name", "created_at", "updated_at"],
      properties: {
        code_name: {
          bsonType: "string",
          description: getFieldDescription("code_name", "string"),
        },
        ui_name: {
          bsonType: "string",
          description: getFieldDescription("ui_name", "string"),
        },
        created_at: {
          bsonType: "date",
          description: getFieldDescription("created_at", "date"),
        },
        updated_at: {
          bsonType: "date",
          description: getFieldDescription("updated_at", "date"),
        },
      },
    },
  },
});

db[process.env.ROLES_COLLECTION].createIndex(
  { code_name: 1 },
  { unique: true }
);

db[process.env.ROLES_COLLECTION].insertMany([
  {
    code_name: "admin",
    ui_name: "Administrator",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    code_name: "trainer",
    ui_name: "Entrenador",
    created_at: new Date(),
    updated_at: new Date(),
  },
]);

// ======================= Users ===========================

db.createCollection(process.env.USERS_COLLECTION, {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "User Object Validation",
      required: [
        "given_names",
        "last_names",
        "government_id",
        "email",
        "cell_phone_number",
        "dob",
        "created_at",
        "updated_at",
      ],
      properties: {
        given_names: {
          bsonType: "string",
          description: getFieldDescription("given_names", "string"),
        },
        last_names: {
          bsonType: "string",
          description: getFieldDescription("last_names", "string"),
        },
        government_id: {
          bsonType: "string",
          description: getFieldDescription("government_id", "string"),
        },
        email: {
          bsonType: "string",
          description: getFieldDescription("email", "string"),
        },
        cell_phone_number: {
          bsonType: "string",
          description: getFieldDescription("cell_phone_number", "string"),
        },
        cell_phone_number: {
          bsonType: "string",
          description: getFieldDescription("cell_phone_number", "string"),
        },
        dob: {
          bsonType: "date",
          description: getFieldDescription("dob", "date"),
        },
        created_at: {
          bsonType: "date",
          description: getFieldDescription("created_at", "date"),
        },
        updated_at: {
          bsonType: "date",
          description: getFieldDescription("updated_at", "date"),
        },
        role: {
          bsonType: "object",
          description: getFieldDescription("role", "Role"),
        },
      },
    },
  },
});

db[process.env.USERS_COLLECTION].createIndex(
  { government_id: 1 },
  { unique: true }
);

const adminRole = db[process.env.ROLES_COLLECTION].findOne({
  code_name: "admin",
});

db[process.env.USERS_COLLECTION].insertMany([
  {
    given_names: "andres",
    last_names: "osorio",
    government_id: "12345",
    email: "some@email.com",
    cell_phone_number: "123-345-6789",
    dob: new Date("1991-02-15"),
    created_at: new Date(),
    updated_at: new Date(),
    role: adminRole,
  },
]);

/*
===============================================================
========================== Utils ==============================
===============================================================
*/

function getFieldDescription(field, type) {
  return `'${field}' must be a ${type} and is required`;
}
