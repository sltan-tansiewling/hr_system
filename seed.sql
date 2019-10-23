INSERT INTO role_type (name) VALUES ('HR');
INSERT INTO role_type (name) VALUES ('Staff');

INSERT INTO leave_type (name) VALUES ('Annual Leave');
INSERT INTO leave_type (name) VALUES ('Medical Leave');

INSERT INTO leave_status (name) VALUES ('Pending Approval');
INSERT INTO leave_status (name) VALUES ('Approved');
INSERT INTO leave_status (name) VALUES ('Rejected');

INSERT INTO employees (name, dept, join_since, role_type_id) VALUES ('Michelle', 'Manpower', '2010-01-04', 1);
INSERT INTO employees (name, dept, join_since, role_type_id) VALUES ('Siew Ling', 'IT', '2019-09-16', 2);

INSERT INTO leave_application (employee_id, leave_type_id, start_date, end_date, leave_status_id) VALUES (2, 1, '2019-12-09', '2019-12-31', 1);