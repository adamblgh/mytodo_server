import * as dotenv from 'dotenv';
dotenv.config();

/*export const config = 
{
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'books'
}*/

export const configDB = 
{
    host     : process.env.MYSQL_HOST || 'localhost',
    user     : process.env.MYSQL_USERNAME || 'root',
    password : process.env.MYSQL_PASSWORD || '',
    database : process.env.MYSQL_DATABASE || 'todo'
}

console.log("Adatbázis: ",configDB.database)