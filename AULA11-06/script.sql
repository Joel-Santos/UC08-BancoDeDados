--CREATE DATABASE MCTEC;
USE MCTEC;
CREATE TABLE FORNECEDORES(
	IDFORNECEDOR INT NOT NULL,
	NOME VARCHAR(255) NOT NULL,
	RUA VARCHAR(255) NOT NULL,
	CIDADE VARCHAR(25) NOT NULL,
	ESTADO CHAR(2) NOT NULL,
	PRIMARY KEY(IDFORNECEDOR)
);
CREATE TABLE CATEGORIAS(
	IDCATEGORIA INT NOT NULL,
	NOME VARCHAR(255) NOT NULL,
	PRIMARY KEY(IDCATEGORIA)
);
CREATE TABLE PRODUTOS(
	IDPRODUTO INT NOT NULL,
	NOME VARCHAR(255) NOT NULL,
	QUANTIDADE INT NOT NULL,
	PRECO FLOAT NOT NULL,
	IDFORNECEDOR INT NOT NULL,
	IDCATEGORIA INT NOT NULL,
	PRIMARY KEY(IDPRODUTO),
	FOREIGN KEY(IDFORNECEDOR) REFERENCES FORNECEDORES(IDFORNECEDOR),
	FOREIGN KEY(IDCATEGORIA) REFERENCES CATEGORIAS(IDCATEGORIA)
);

INSERT INTO FORNECEDORES(IDFORNECEDOR, NOME, RUA, CIDADE, ESTADO) 
VALUES
(1 , 'Ajax SA' ,'Rua Presidente Castelo Branco', 'Porto Alegre' , 'RS'),
(2 , 'Sansul SA', 'Av Brasil' , 'Rio de Janeiro', 'RJ'),
(3, 'South Chairs', 'Rua do Moinho', 'Santa Maria' , 'RS'),
(4, 'Elon Electro', 'Rua Apolo',  'São Paulo', 'SP'),
(5, 'Mike electro',  'Rua Pedro da Cunha', 'Curitiba', 'PR');

INSERT INTO CATEGORIAS(IDCATEGORIA, NOME) 
VALUES
(1 ,'Super Luxo'),
(2 ,'Importado'),
(3 ,'Tecnologia'),
(4 ,'Vintage'),
(5 ,'Supremo');

INSERT INTO PRODUTOS(idPRODUTO, NOME, QUANTIDADE, PRECO, IdFORNECEDOR, IDCATEGORIA)
VALUES 
(1, 'Cadeira azul' , 30, 300.00, 5, 5),
(2, 'Cadeira vermelha', 50, 2150.00, 2, 1),
(3, 'Guarda-roupa Disney', 400, 829.50, 4,1),
(4 , 'Torradeira Azul', 20, 9.90, 3, 1),
(5, 'TV',  30, 3000.25, 2, 2);
--INSERIR dados de 2 produtos de categoria 3 e qualquer fornecedor
INSERT INTO PRODUTOS(idPRODUTO, NOME, QUANTIDADE, PRECO, IdFORNECEDOR, IDCATEGORIA)
VALUES 
(6, 'Cadeira gamer' , 100, 400, 3, 3),
(7, 'Notebook', 30, 3500, 2, 3);
/*2. INSERIR dados de 2 fornecedores distintas, sendo do Estado do RN e outro do estado da PB;*/
INSERT INTO FORNECEDORES(IDFORNECEDOR, NOME, RUA, CIDADE, ESTADO) 
VALUES
(6 , 'Miranda' ,'Rua Prudente de Morais', 'Natal' , 'RN'),(7 , 'Rainha' ,'Rua da Paraíba', 'Bananeiras' , 'PB');
--3. INSERIR dados de mais 1 categoria de nome Nacional
INSERT INTO CATEGORIAS(IDCATEGORIA, NOME) 
VALUES
(6 ,'Nacional');
/*4. ATUALIZE a tabela produtos, aumentando o preço do produto cujo idPRODUTO é 4, para R$ 298.00;*/UPDATE PRODUTOS SET PRECO = 298 WHERE IDPRODUTO = 4;SELECT * FROM PRODUTOS;/*5. RECUPERE da tabela produtos, todos os produtos do Fornecedor localizado no RJ;*/SELECT NOME, IDFORNECEDOR FROM PRODUTOSWHERE IDFORNECEDOR = 2;/*6. RECUPERE da tabela produtos, todos os produtos do Fornecedor localizadono RS;*/SELECT PRODUTOS.NOME, PRODUTOS.IDFORNECEDOR, FORNECEDORES.NOMEFROM PRODUTOS, FORNECEDORESWHERE PRODUTOS.IDFORNECEDOR = FORNECEDORES.IDFORNECEDOR AND ESTADO = 'RS';SELECT * FROM FORNECEDORES;SELECT * FROM PRODUTOS;