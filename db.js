/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

} else {
  configs = {
    user: 'siewling',
    host: '127.0.0.1',
    database: 'hr_system',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

const allEmployeesModelsObject = require('./models/employees');
const employeesModelsObject = allEmployeesModelsObject( pool );

const allHrModelsObject = require('./models/hr');
const hrModelsObject = allHrModelsObject( pool );

/*const allStaffModelsObject = require('./models/staff');
const staffModelsObject = allStaffModelsObject( pool );*/

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

module.exports = {

    //make queries directly from here
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },

    // get a reference to end the connection pool at server end
    pool:pool,

    /*
    * ADD APP MODELS HERE
    */

    employees: employeesModelsObject,
    hr: hrModelsObject,
    /*staff: staffModelsObject*/
};