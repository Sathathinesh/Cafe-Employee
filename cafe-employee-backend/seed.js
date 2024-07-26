const { Employee, Cafe, EmployeeCafe } = require('./models');

async function seedDatabase() {
//   await Employee.bulkCreate([
//     { id: 'UI1234567', name: 'John Doe', email_address: 'john@example.com', phone_number: '91234567', gender: 'Male' },
//     { id: 'UI2345678', name: 'Jane Doe', email_address: 'jane@example.com', phone_number: '82345678', gender: 'Female' },
//   ]);

  //const cafe1 = await Cafe.create({ id: 'CA1234560', name: 'Cafe 1', description: 'First cafe', location: 'Location 1' });
  //const cafe2 = await Cafe.create({ id: 'CA1234561', name: 'Cafe 2', description: 'Second cafe', location: 'Location 2' });

  await EmployeeCafe.create({ employee_id: 'UI1234567', cafe_id: 'CA1234560', start_date: new Date() });
  await EmployeeCafe.create({ employee_id: 'UI2345678', cafe_id: 'CA1234561', start_date: new Date() });

  console.log('Database seeded successfully');
  process.exit();
}

seedDatabase();
/*
CREATE TABLE employees (
    id varchar(255),
    name varchar(255),
    email_address varchar(255),
    phone_number varchar(255),
    gender varchar(255),
    PRIMARY KEY (id)
);
    tableName: '_'

CREATE TABLE cafes (
    id varchar(255),
    name varchar(255),
    description varchar(255),
    location varchar(255),
    logo varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE employee_cafes (
    id varchar(255),
    employee_id varchar(255),
    cafe_id varchar(255),
    start_date DATE,
    PRIMARY KEY (id)
);

ALTER TABLE employees
ADD createdAt DATETIME, updatedAt DATETIME;

ALTER TABLE cafes
ADD createdAt DATE, updatedAt DATE;

ALTER TABLE employee_cafes
ADD createdAt DATE, updatedAt DATE;

*/
