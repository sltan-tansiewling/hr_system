module.exports = (app, allModels) => {

  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

   /*
    Planning for Routes and Controllers:
        - [ ] GET /login -> employeeControllerCallbacks.getLoginForm
        - [ ] POST /login -> employeeControllerCallbacks.postLogin
            - [ ] In controller, check logged in role type id
            - [ ] Response redirect to the correct route path


        - [ ] GET /hr/leaveApplication -> hrControllerCallbacks.getAllLeaveApplication
            - [ ] This is to show all leave applications
        - [ ] GET /hr/leaveApplication/:leaveStatus -> hrControllerCallbacks.getAllLeaveApplicationByStatus
            - [ ] In controller, call the model method to show only all with related status
        - [ ] GET /hr/leaveApplication/:id -> hrControllerCallbacks.getLeaveApplicationById
            - [ ] To show details of a leave application
        - [ ] GET /hr/leaveApplication/:id/edit -> hrControllerCallbacks.getEditLeaveApplicationById
            - [ ] To show edit form with approval buttons
        - [ ] PUT /hr/leaveApplication/:id -> hrControllerCallbacks.updateLeaveApplicationById
            - [ ] To update leave application status


        - [ ] GET /staff/leaveApplication -> staffControllerCallbacks.getAllLeaveApplication
            - [ ] To show all leave application for the logged in user
        - [ ] GET /staff/leaveApplication/new -> staffControllerCallbacks.getNewLeaveApplicationForm
            - [ ] To show new leave application form
        - [ ] POST /staff/leaveApplication -> staffControllerCallbacks.createLeaveApplication
            - [ ] To show the newly added application in the main view
            - [ ] See if able to show the newly added record only with /:id
        - [ ] GET /staff/leaveApplication/:id -> staffControllerCallbacks.getLeaveApplicationById
            - [ ] To view details of an application
        - [ ] GET /staff/leaveApplication/:id/edit -> staffControllerCallbacks.getEditLeaveApplicationById
            - [ ] To show edit form with update and cancel buttons
            - [ ] Ensure user can only edit when the leave status is still in pending approval status
        - [ ] PUT /staff/leaveApplication/:id -> staffControllerCallbacks.updateLeaveApplicationById
   */

   // Require the controllers
   const employeeControllerCallbacks = require('./controllers/employees')(allModels);

   const hrControllerCallbacks = require('./controllers/hr')(allModels);

   const staffControllerCallbacks = require('./controllers/staff')(allModels);

   // Routes for all employees
   app.get('/login', employeeControllerCallbacks.getLoginForm);
   app.post('/login', employeeControllerCallbacks.postLogin);

   // Routes for HR
   app.get('/hr/leaveApplication', hrControllerCallbacks.getAllLeaveApplication);
   // app.get('/hr/leaveApplication/:leaveStatus', hrControllerCallbacks.getAllLeaveApplicationByStatus);
   app.get('/hr/leaveApplication/:id', hrControllerCallbacks.getLeaveApplicationById);
   app.get('/hr/leaveApplication/:id/edit', hrControllerCallbacks.getEditLeaveApplicationById);
   app.put('/hr/leaveApplication/:id', hrControllerCallbacks.updateLeaveApplicationById);

   // Routes for Staff
   app.get('/staff/leaveApplication', staffControllerCallbacks.getAllLeaveApplication);
   app.get('/staff/leaveApplication/new', staffControllerCallbacks.getNewLeaveApplicationForm);
   app.post('/staff/leaveApplication', staffControllerCallbacks.createLeaveApplication);
   app.get('/staff/leaveApplication/:id', staffControllerCallbacks.getLeaveApplicationById);
   /*app.get('/staff/leaveApplication/:id/edit', staffControllerCallbacks.getEditLeaveApplicationById);
   app.put('/staff/leaveApplication/:id', staffControllerCallbacks.updateLeaveApplicationById);*/
};
