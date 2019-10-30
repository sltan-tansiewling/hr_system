# HR System
Allows you to apply and track your leave application

#### Proto Persona

Name: Me

Bio:
Employee of a company that does not have a HR system

Stories:
1. To apply for leave, staff needs to send for approval via email.
2. Approval emails will also be sent back to applicant via email.
3. Staff needs to trace back to leave approval emails to calculate leave balance.

Pain Points:
Inefficient way because emails get too many and may be overlooked.

Needs:
To have a central place to see status of leave applications and balance leave

#### Problem Statement

Employees need a quick and easy way to apply and track their leave applications so that they do not have to look through their emails and track manually in Excel.

#### Link to Heroku
https://morning-brook-24534.herokuapp.com/
- Staff Login: sltan (Password: slpwd)
- HR Login: michellelim (Password: mlpwd)

#### Scope

Leave Application
1. As a staff, he/she should be able to apply new leave.
2. As a staff, he/she should be able to view all his/her leave applications.
3. As a staff, he/she should be able to edit his/her leave application details.
4. As a HR, he/she should be able to view all the leave applications submitted by all the staff.
5. As a HR, he/she should be able to approve or reject leave applications.
6. As a staff, he/she should not be able to access HR's URLs.

#### Assumptions

1. All leave applications submitted are routed to the HR for approval.
2. All staff information is created before hand in database by the IT dept.

#### Technologies Used

1. Node JS
2. Express JS
3. PostgreSQL
4. MVC
5. HTML React JS Template

#### Wireframe
![Workflow](https://github.com/tansiewling-hotmail/hr_system/blob/master/hr_system_wireframe.png)

#### ERD

![ERD](https://github.com/tansiewling-hotmail/hr_system/blob/master/hr_system_erd.jpg)

#### Further-To-Do

1. As a staff, he/she should be able to see how many leave days he/she is entitled to for each type of leave.
2. As a staff, he/she should be able to see how many leave days he/she has taken for each type of leave.
3. As a staff, he/she should be able to see how many leave days he/she has left for each type of leave.
4. As a staff, he/she should not be able to amend leave application details or cancel once it is approved or rejected.
5. As a HR, he/she should not be able to approve/reject a cancelled leave.
6. As a staff, he/she should be able to see when the leave application is submitted and updated by the approver (in this case, the HR).
7. As a HR, he/she should be able to see when the leave application is submitted and updated by the approver or the staff himself/herself.
8. As a HR, he/she should be able to see at a glance who is on leave today.