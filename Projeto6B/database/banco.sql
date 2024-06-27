create database GestaodeEstoque;

use GestaodeEstoque;

 create table Fornecedor(
 id int not null auto_increment,
 nomefantasia varchar(200) not null,
 endereco varchar(200) not null,
 cnpj varchar(20) not null,
 primary key(id)
 );

 create table Produtos(
 id int not null auto_increment,
 nome varchar(200) not null,
 estoque int not null,
 id_fornecedor int,
 primary key(id),
 foreign key (id_fornecedor) references Fornecedor(id)
  );