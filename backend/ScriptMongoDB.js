var cursos = db.getCollection('cursos');

cursos.insert({nome: "Ciencia da computacao"});
cursos.insert({nome: "Jornalismo"});
cursos.insert({nome: "Publicidade"});
cursos.insert({nome: "Analise e desenvolvimento de sistemas"});
cursos.insert({nome: "Farmacia"});
cursos.insert({nome: "Biomedicina"});
cursos.insert({nome: "Ciencias Biologicas"});
cursos.insert({nome: "Engenharia de software"});
cursos.insert({nome: "Modelagem de dados"});
cursos.insert({nome: "Ciencia de dados"});
cursos.insert({nome: "Machine learning"});
cursos.insert({nome: "Programacao"});
cursos.insert({nome: "Design grafico"});
cursos.insert({nome: "Engenharia Mecânica"});


cursos.find();

/**
 *  use Projetos
 *
 * INSERT INTO
 *  cursos("Ciencia da computacao");
 * INSERT INTO
 *  cursos("Jornalismo");
 * INSERT INTO
 *  cursos("Publicidade");
 * INSERT INTO
 *  cursos("Analise e desenvolvimento de sistemas");
 * INSERT INTO
 *  cursos("Farmacia");
 * INSERT INTO
 *  cursos("Biomedicina");
 * INSERT INTO
 *  cursos("Ciencias Biologicas");
 * INSERT INTO
 *  cursos("Engenharia de software");
 * INSERT INTO
 *  cursos("Modelagem de dados");
 * INSERT INTO
 *  cursos("Ciencia de dados");
 * INSERT INTO
 *  cursos("Machine learning");
 * INSERT INTO
 *  cursos("Programacao");
 * INSERT INTO
 *  cursos("Design grafico");
 * INSERT INTO
 *  cursos("Engenharia Mecânica");
 *
 * SELECT *
 * FROM cursos;
 *
 */
