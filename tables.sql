CREATE TABLE IF NOT EXISTS role_type (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS leave_type (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS leave_status (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    name TEXT,
    dept TEXT,
    join_since DATE,
    role_type_id INTEGER,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS leave_application (
    id SERIAL PRIMARY KEY,
    employee_id INTEGER,
    leave_type_id INTEGER,
    start_date DATE,
    end_date DATE,
    leave_status_id INTEGER
);