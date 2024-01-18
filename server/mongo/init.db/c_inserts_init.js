/*
===============================================================
========================= Inserts =============================
===============================================================
*/

// ======================= Roles ===========================

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
    role: {
      $ref: "roles",
      $id: adminRole._id,
    },
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
    role: {
      $ref: "roles",
      $id: trainerRole._id,
    },
    created_at: new Date(),
    updated_at: new Date(),
  },
]);
