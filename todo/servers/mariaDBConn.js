const mariadb = require('mariadb');
const vals = require('./consts.js');
const bcrypt = require('bcrypt-nodejs'); 

///////////////maria DB Connection//////////////
const pool = mariadb.createPool({

    host: vals.DBHost, port:vals.DBPort,
    user: vals.DBUser, password: vals.DBPass,
    connectionLimit: 10

});
 
///////////////get postlist/////////////////////
async function GetUserList(){

    let conn, rows;

    try{
        conn = await pool.getConnection();
        conn.query('USE blog');
        rows = await conn.query('SELECT * FROM POST');
    }catch(err){
        throw err;
    }finally{
        if (conn) conn.end();
        return rows;
    }
}

///////////////create post/////////////////////
async function CreatePost(data){

    let conn, rows;
    const title = data.title;
    const content = data.content;
    const writer = data.writer;

    try{
        conn = await pool.getConnection();
        conn.query('USE blog');
        rows = await conn.query('INSERT INTO POST (title, content,writer,regdate) VALUES(?,?,?,now())',[title, content, writer]);
    }catch(err){
        throw err;
    }finally{
        if(conn) conn.end();
        return rows;
    }
}

///////////////remove post/////////////////////
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

///////////////get post/////////////////////
async function GetPost(data){

    let conn, row;
    const postid = data.postid;

    try{
        conn = await pool.getConnection();
        conn.query('USE blog');
        row = await conn.query('SELECT * FROM POST WHERE bno = ?',[postid]);
    }catch(err){
        throw err;
    }finally{
        if(conn) conn.end();
        return row;
    }
}

///////////////update post/////////////////////
async function UpdatePost(data){

    let conn, row;
    const postid = data.postid;
    const content = data.content;

    try{
        conn = await pool.getConnection();
        conn.query('USE blog');
        row = await conn.query('UPDATE POST SET content = ? WHERE bno = ?',[content,postid]);
    }catch(err){
        throw err;
    }finally{
        if(conn) conn.end();
        return row;
    }
}

///////////////create user/////////////////////
async function FindUser(data){

    let conn, row;
    const id = data.id;
    const password = data.password;
    const email = data.email;
    
    try{
        conn = await pool.getConnection();
        conn.query('USE blog');
        row = await conn.query('SELECT id FROM USER WHERE id = ?',[id])

        if(row.length){
            return false;
        }else{
            return new Promise((resolve, reject) => {
                bcrypt.hash(password, null, null, function(err, hash) {
                    const sql = [id,hash,email]; 
                    conn.query('insert into USER (id,password,email) values(?,?,?)', sql)
                    if(err) reject(err)
                    resolve(true)
                });  
            })
        }
    }catch(err){
        throw err;
    }finally{
        if(conn) conn.end();
    }
}

///////////////login user////////////////////
async function LoginUser(data){

    let conn, row;
    const id = data.id;
    const password = data.password;

    try{
        conn = await pool.getConnection();
        conn.query('USE blog');
        row = await conn.query('SELECT password FROM USER WHERE id = ?',[id])
        
        if(row.length){
            return new Promise((resolve, reject) => {
                bcrypt.compare(password, row[0].password, function(err, res) {
                    if (err) reject(err)
                    resolve(res)
                });
        })}else{
            return false;
        }
    }catch(err){
        throw err;
    }finally{
        if(conn) conn.end();
    }
}

///////////////module////////////////////
module.exports = {
    getUserList: GetUserList,
    createPost: CreatePost,
    removePost: RemovePost,
    getPost : GetPost,
    updatePost : UpdatePost,
    findUser : FindUser,
    loginUser : LoginUser
}