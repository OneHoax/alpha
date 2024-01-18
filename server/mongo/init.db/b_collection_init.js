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

// ======================= Users ===========================

db.createCollection("users");
// /*
// db.createCollection(process.env.USERS_COLLECTION, {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       title: "User Object Validation",
//       required: [
//         "given_names",
//         "last_names",
//         "government_id",
//         "email",
//         "cell_phone_number",
//         "dob",
//         "created_at",
//         "updated_at",
//       ],
//       properties: {
//         given_names: {
//           bsonType: "string",
//           description: getFieldDescription("given_names", "string"),
//         },
//         last_names: {
//           bsonType: "string",
//           description: getFieldDescription("last_names", "string"),
//         },
//         government_id: {
//           bsonType: "string",
//           description: getFieldDescription("government_id", "string"),
//         },
//         email: {
//           bsonType: "string",
//           description: getFieldDescription("email", "string"),
//         },
//         cell_phone_number: {
//           bsonType: "string",
//           description: getFieldDescription("cell_phone_number", "string"),
//         },
//         cell_phone_number: {
//           bsonType: "string",
//           description: getFieldDescription("cell_phone_number", "string"),
//         },
//         dob: {
//           bsonType: "date",
//           description: getFieldDescription("dob", "date"),
//         },
//         created_at: {
//           bsonType: "date",
//           description: getFieldDescription("created_at", "date"),
//         },
//         updated_at: {
//           bsonType: "date",
//           description: getFieldDescription("updated_at", "date"),
//         },
//         role: {
//           bsonType: "object",
//           description: getFieldDescription("role", "Role"),
//         },
//       },
//     },
//   },
// });
// */

db.users.createIndex({ government_id: 1 }, { unique: true });
db.users.createIndex({ email: 1 }, { unique: true });

/*
===============================================================
========================== Utils ==============================
===============================================================
*/

function getFieldDescription(field, type) {
  return `'${field}' must be a ${type} and is required`;
}
