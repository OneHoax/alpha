/*
===============================================================
========================= Inserts =============================
===============================================================
*/

// ======================= Roles ===========================

db.roles.insertMany([
  {
    codeName: "admin",
    uiName: "Administrador",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    codeName: "trainer",
    uiName: "Entrenador",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    codeName: "sports_professional",
    uiName: "Profesional del Deporte",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    codeName: "physio",
    uiName: "Fisioterapeuta",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    codeName: "client",
    uiName: "Cliente",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    codeName: "injured",
    uiName: "Lesionado",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    codeName: "athlete",
    uiName: "Deportista",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);

// ======================= Users ===========================

const adminRole = db.roles.findOne({
  codeName: "admin",
});
const trainerRole = db.roles.findOne({
  codeName: "trainer",
});

db.users.insertMany([
  {
    givenNames: "andres",
    givenNames: "osorio",
    governmentId: "12345",
    email: "andres@email.com",
    cellPhoneNumber: "123-345-6789",
    dob: new Date("1991-02-15"),
    role: [
      {
        $ref: "roles",
        $id: adminRole._id,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    givenNames: "mauro",
    givenNames: "solano",
    governmentId: "812343",
    email: "mauro@email.com",
    cellPhoneNumber: "123-345-6789",
    dob: new Date("1989-05-11"),
    role: [
      {
        $ref: "roles",
        $id: trainerRole._id,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);
