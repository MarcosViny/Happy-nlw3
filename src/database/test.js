const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //Insert data into the table
  await saveOrphanage(
    db,
    {
      id: 1,
      lat: "-12.9292587",
      lng: "-38.5085803",
      name: "Lar da Alegria",
      about:
        "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      whatsapp: "988884444",
      images:
        "https://blog.cincinnatichildrens.org/cms/wp-content/uploads/2015/07/group-of-young-children-hanging-out-in-park-picture-id495354633.jpg",
      instructions:
        "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      opening_hours: "Horário de visitas Das 18h até 8h",
      open_on_weekends: "1",
    },
  );

  //Consult table data
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //Consult a table data
  /* const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage) */

  /*  console.log(await db.all(`UPDATE orphanages SET images = [
      "https://images.unsplash.com/photo-1556258707-995cd393dd8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", 
      "https://images.unsplash.com/photo-1554312879-371d7377dea0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ] WHERE id = "1"`)) */

  //Update a table date
  /* await db.all('UPDATE orphanages SET id = "2" WHERE name = "Lar dos Meninos"') */

  //Delete a table data
  /* await db.run('DELETE FROM orphanages WHERE id = "3') */
});
