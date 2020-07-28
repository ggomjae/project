const mariadb = require('mariadb');
const vals = require('./consts.js');
 
const pool = mariadb.createPool({
    host: vals.DBHost, port:vals.DBPort,
    user: vals.DBUser, password: vals.DBPass,
    connectionLimit: 5
});
 
async function GetUserList(){
    let conn, rows;
    try{
        conn = await pool.getConnection();
        conn.query('USE blog');
        rows = await conn.query('SELECT * FROM POST');
    }
    catch(err){
        throw err;
    }
    finally{
        if (conn) conn.end();
        return rows;
    }
}

async function CreatePost(data){

    let conn, rows;
    const title = data.title;
    const content = data.content;
    const writer = data.writer;

    try{
        conn = await pool.getConnection();
        conn.query('USE blog');
        rows = await conn.query('INSERT INTO POST (title, content,writer,regdate) VALUES(?,?,?,now())',[title, content, writer]);
    }
    catch(err){
        throw err;
    }
    finally{
        if(conn) conn.end();
        return rows;
    }
}

async function RemovePost(data){
    let conn, rows;
    const bno = data.bno;
    try{
        conn = await pool.getConnection();
        conn.query('USE blog');
        rows = await conn.query('DELETE FROM POST WHERE bno = ?',[bno]);
    }
    catch(err){
        throw err;
    }
    finally{
        if(conn) conn.end();
        return rows;
    }
}

module.exports = {
    getUserList: GetUserList,
    createPost: CreatePost,
    removePost: RemovePost
}