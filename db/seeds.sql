INSERT INTO departments (name)
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES ('Software Engineer', 120000, 1),
       ('Lead Engineer', 150000, 1),
       ('Accountant', 125000, 2),
       ('Account Manager', 160000, 2),
       ('Lawyer', 190000, 3),
       ('Legal Team Lead', 250000, 3),
       ('Salesperson', 80000, 4),
       ('Sales Manager', 120000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id,)
VALUES ('John', 'Doe', 8, null,),
       ('Ashley', 'Rodriguez', 2, null,),
       ('Kunal', 'Singh', 4, null,),
       ('Sarah', 'Lourd', 6, null,),
       ('Mike', 'Chan', 7, 1),
       ('Kevin', 'Tupik', 1, 2),
       ('Malia', 'Brown', 3, 3),
       ('Tom', 'Allen', 5, 4);

