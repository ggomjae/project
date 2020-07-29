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

async function GetPost(data){
    let conn, row;
    const postid = data.postid;
    try{
        conn = await pool.getConnection();
        conn.query('USE blog');
        row = await conn.query('SELECT * FROM POST WHERE bno = ?',[postid]);
    }
    catch(err){
        throw err;
    }
    finally{
        if(conn) conn.end();
        return row;
    }
}

async function UpdatePost(data){
    let conn, row;
    console.log(data)
    const postid = data.postid;
    const content = data.content;
    try{
        conn = await pool.getConnection();
        conn.query('USE blog');
        row = await conn.query('UPDATE POST SET content = ? WHERE bno = ?',[content,postid]);
    }
    catch(err){
        throw err;
    }
    finally{
        if(conn) conn.end();
        return row;
    }
}

module.exports = {
    getUserList: GetUserList,
    createPost: CreatePost,
    removePost: RemovePost,
    getPost : GetPost,
    updatePost : UpdatePost
}