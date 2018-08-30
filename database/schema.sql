create database burgers;
use burgers;

create table burgers (
id int not null  auto_increment Primary key,
burger_name varchar(30) not null,
devoured Bool default false

);
