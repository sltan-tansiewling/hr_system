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

 // Is this correct? Does this means that we are establishing connection to each of the tables?

const allRoleTypesModelsObject = require('./models/roleTypes');
const roleTypesModelsObject = allRoleTypesModelsObject( pool );

const allLeaveTypesModelsObject = require('./models/leaveTypes');
const leaveTypesModelsObject = allLeaveTypesModelsObject( pool );

const allLeaveStatusModelsObject = require('./models/leaveStatus');
const leaveStatusModelsObject = allLeaveStatusModelsObject( pool );

const allEmployeesModelsObject = require('./models/employees');
const employeesModelsObject = allEmployeesModelsObject( pool );

const allLeaveApplicationModelsObject = require('./models/leaveApplication');
const leaveApplicationModelsObject = allLeaveApplicationModelsObject( pool );

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
    roleTypes: roleTypesModelsObject,
    leaveTypes: leaveTypesModelsObject,
    leaveStatus: leaveStatusModelsObject,
    employees: employeesModelsObject,
    leaveApplication: leaveApplicationModelsObject
};