const {Pool} = require("pg");

async function conexao() {
    console.log("Inciar a conexão ");
    const pool = new Pool(
        {
            connectionString: "",
            ssl: {
                rejectUnauthorized: false
            } 
        }
    ); 

    let con = await pool.connect();

    // let res = await con.query("Create table aluno (id serial primary key, nome varchar)");
    //let res = await con.query("insert into aluno (nome) values ($1)", ['Sicrano']);
    let res = await con.query("select * from aluno");
    console.log(res.rows);
}

conexao();