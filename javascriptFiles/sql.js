// select version();

// select 5*10;

// select 5*(4+3);

// insert into moviess(movie_id,movie_name,movie_genre,imdb_rating)
// values(101,'kick','comedy',8.4),
// (102,'rrr','peridic',9.4),
// (103,'kgf','action',9.5),
// (104,'tne','backdrop',9.2),
// (105,'kanchana','horror',7.4),
// (106,'goodnight','entertainment',8.4),
// (107,'hit','thriller',7.7);

// select * from moviess;

// update moviess
// set movie_genre='action, emotion'
// where movie_id=103;

// delete from moviess
// where movie_id=107;

// select * from moviess
// where imdb_rating>8.7;


// select * from moviess
// where imdb_rating between 8.3 and 8.8;

// select * from moviess where movie_genre='comedy';

// select movie_name,movie_genre from moviess where imdb_rating>9;

// select * from moviess 
// where imdb_rating in(8.2,9.5); 

// create table employee(emp_id int not null primary key,
// emp_name varchar(40),email varchar(40),gender varchar(10),
// department varchar(40),adress varchar(40),salaray real );

// select * from employee;



// create table employees(emp_id int not null primary key,
// emp_name varchar(40),email varchar(40),gender varchar(10),
// department varchar(40),adress varchar(40),salaray real );

// insert into employees(emp_id,emp_name,email,gender,department,adress,salaray)

// values(101,'venky','venky121@..com','male','software','hyd',50000.56),

// (102,'mahesh','mahesh121@..com','male','software','usa',70000.56),

// (103,'navya','navya121@..com','female','job','uea',80000.56),

// (104,'laxmi','female','laxmi121@..com','teacher','hnk',40000.56),

// (105,'sahul','sahul121@..com','male','programmer','london',20000.56),

// (106,'mounika','mounika121@..com','female','develpoer','japon',60000.56),
// update employees
// set adress='usa'
// where emp_id=104;

// select * from employees;

// select distinct adress from employees;

// select * from employees order by salaray desc;

// alter table employees
// rename column adress to country;

// select * from employees
// where country='usa' and salaray<90000;

// select * from employees
// where country='hyd' or department='software';

// select * from employees order by salaray desc limit 3;
// select * from employees order by salaray desc limit 3 offset 2;
// select * from employees order by salaray desc fetch first 3 row only;
// select * from employees limit 6;
// select * from employees offset 2;

// select * from employees fetch first 5 row only;

// select * from employees where emp_name like 'v%';

// select * from employees where emp_name like 's%';
// select * from employees where emp_name like '%h';

// select * from employees where emp_name like '%sh%';
// select * from employees where emp_name like '_e%';
// select * from employees where emp_name like '%_i';

// select sum(salaray) as total_salary from employees;

// select avg(salaray) as mean_salary from employees;
// select max(salaray) as max_salary from employees;
// select min(salaray) as min_salary from employees;
// select count(department) as total_dep from employees;
// select count(distinct department) as total_dep from employees;
// select department from employees;
// select distinct department from employees;
// select avg(salaray) as mean_salary from employees;

// select  country,avg(salaray) as avg_salary
// from employees group by country order by avg_salary desc;

// select gender,avg(salaray) as avg_salary
// from employees group by gender order by avg(salaray) desc;

// select country,count(emp_id) from employees group by country;

// select country,avg(salaray)as avg_salary
// from employees group by country having avg(salaray)>50000;

// select country,count(emp_id) as count_country from employees
// group by country having count(emp_id)<3 order by count(emp_id);

// select department,country,salaray,
// case
// when salaray>20000 and salaray<55000
// then 'less salary'
// when salaray>55000 and salaray<650000
// then 'medium salary'
// when salaray>100000
// then 'high salaray'
// end as salary_range
// from employees order by salaray desc;

// select emp_name,department,country,salaray
// from employees where salaray>(select avg(salaray) from employees);

// --sql functions
// select abs(-100);

// select greatest(23.44,22.98,40.23,98,100,234.65);

// select least(23.44,22.98,40.23,98,100,234.65);

// select mod(95,10);

// select power(2,4) as power_num;

// select sqrt(100);

// select tan(45);

// select ceil(10.3);

// select floor(10.3);

// --string  functions

// select char_length('india is a democracy');

// select concat('hello',' ','venkatesh');

// select left('india is a democracy',5);

// select right('india is a democracy',12);

// select repeat('india ',5);

// select reverse('india is a democracy');

// --user defined function

// create or replace function
// count_emails()
// returns integer as $total_emails$
// declare
// total_emails integer;
// begin 
// select count(email) into total_emails
// from employees;
// return total_emails;
// end;
// $total_emails$ language plpgsql;

// select count_emails();