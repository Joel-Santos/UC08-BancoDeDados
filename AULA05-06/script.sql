-- CRIAR A BASE DE DADOS (DDL)
/*CREATE DATABASE VIDEOLOCADORA;
CREATE TABLE GENERO(
    ID INT UNSIGNED NOT NULL,
    DESCRICAO VARCHAR(200) NOT NULL,
    PRIMARY KEY(ID)
);
CREATE TABLE FILMES(
    ID INT UNSIGNED AUTO_INCREMENT,
    NOME VARCHAR(200) NOT NULL,
    ID_GENERO INT UNSIGNED NOT NULL,
    PRIMARY KEY(ID),
    FOREIGN KEY(ID_GENERO) REFERENCES GENERO(ID)
);*/
USE VIDEOLOCADORA;
-- INSERT INTO GENERO(ID, DESCRICAO)
-- VALUES (1, 'ANIMAÇÃO'), (2, 'TERROR'), (3, 'AÇÃO'), (4, 'DRAMA'), (5, 'COMÉDIA');

-- INSERT INTO FILMES (NOME, ID_GENERO)
-- VALUES ('Batman', 3), ('The Battle of the Dark River', 3), ('White Duck', 1), ('Breaking Barrters', 4), ('The Two Hours', 2);

--questão 3 Criar mais 5 registros na tabela movies 
-- INSERT INTO FILMES (NOME, ID_GENERO)
-- VALUES ('Gato de botas', 3), ('Moana', 2), ('Hulk', 5), ('Bacurau', 3), ('Her', 4);


--4) Criar mais dois registros na tabela genres
INSERT INTO GENERO(ID, DESCRICAO)
VALUES (6, 'ROMANCE'), (7, 'FICÇÃO');

SELECT * FROM GENERO;
SELECT * FROM FILMES;
--5) Criar uma consulta que retorne todos os filmes do gênero Horror 

SELECT  NOME AS NOME_FILME, ID_GENERO AS COD_GENERO FROM FILMES WHERE ID_GENERO = 2;

--6) Criar uma consulta que retorne todos os filmes do gênero Horror ou Drama 
SELECT  NOME AS NOME_FILME, ID_GENERO AS COD_GENERO FROM FILMES WHERE ID_GENERO = 2 OR ID_GENERO = 4;

--7) Criar uma consulta que retorne todos os filmes 
--8) Criar uma consulta que retorne todos os gêneros 
SELECT * FROM GENERO;
SELECT * FROM FILMES;

--9) Criar uma consulta que retorne todos os filmes que começam com a letra T  (OPERADOR LIKE)
SELECT NOME FROM FILMES WHERE NOME LIKE 'T%';

--10) Atualizar todos os filmes do gênero Action para Drama

UPDATE FILMES SET ID_GENERO = 4
WHERE ID_GENERO = 3;

--11)  Criar uma consulta que retorne o nome de todos os filmes e o nome do gênero

SELECT NOME AS FILME, DESCRICAO AS GÊNERO FROM FILMES, GENERO 
WHERE ID_GENERO = GENERO.ID;

--12) Criar um código SQL que delete todos os filmes do gênero Action

DELETE FROM FILMES WHERE ID_GENERO = 1;