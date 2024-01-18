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

db.createCollection("roles");
/*
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
*/

db.roles.createIndex({ code_name: 1 }, { unique: true });

db.roles.insertMany([
  {
    code_name: "admin",
    ui_name: "Administrador",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    code_name: "trainer",
    ui_name: "Entrenador",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    code_name: "sports_professional",
    ui_name: "Profesional del Deporte",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    code_name: "physio",
    ui_name: "Fisioterapeuta",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    code_name: "client",
    ui_name: "Cliente",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    code_name: "injured",
    ui_name: "Lesionado",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    code_name: "athlete",
    ui_name: "Deportista",
    created_at: new Date(),
    updated_at: new Date(),
  },
]);

// ======================= Users ===========================

db.createCollection("users");
/*
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
*/

db.users.createIndex({ government_id: 1 }, { unique: true });

db.users.createIndex({ email: 1 }, { unique: true });

const adminRole = db.roles.findOne({
  code_name: "admin",
});
const trainerRole = db.roles.findOne({
  code_name: "trainer",
});

db.users.insertMany([
  {
    given_names: "andres",
    last_names: "osorio",
    government_id: "12345",
    email: "andres@email.com",
    cell_phone_number: "123-345-6789",
    dob: new Date("1991-02-15"),
    role: adminRole,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    given_names: "mauro",
    last_names: "solano",
    government_id: "812343",
    email: "mauro@email.com",
    cell_phone_number: "123-345-6789",
    dob: new Date("1989-05-11"),
    role: trainerRole,
    created_at: new Date(),
    updated_at: new Date(),
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