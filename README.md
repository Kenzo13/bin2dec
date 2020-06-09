## Titulo do projeto
<h1 align="center">Vaga Backend Developer JR - AIRFLUENCERS</h1>

## Descrição do Projeto
<p align="justify">
  Desenvolver uma aplicação capaz de simular um campeonato de futebol,contendo 4 times.
</p>

## Status do Projeto: Concluido :heavy_check_mark:

<!-- <img src="https://img.shields.io/static/v1?label=node&message=framework&color=blue&style=for-the-badge&logo=NODE"/> -->

## O que a plataforma é capaz de fazer :checkered_flag:

:trophy: Criar seus próprios times.<br>
:trophy: Criar seus próprios jogos utilizando esses times.<br>
:trophy: Acompanhar a tabela de classificação.<br>

## Pré-requisitos
<a href="https://nodejs.org/en/download/" rel="nofollow">
  :warning: NodeJs
</a>

<br>

<a href="https://classic.yarnpkg.com/en/docs/install/#debian-stable" rel="nofollow">
  :warning: Yarn
</a>

<br>

<a href="https://dev.mysql.com/doc/workbench/en/wb-installing.html" rel="nofollow">
  :warning: Mysql Workbench
</a>

<br>

<a href="https://insomnia.rest/download/" rel="nofollow">
  :warning: Insomnia (system 64bit)
</a>

<br>

<a href="https://www.postman.com/downloads/" rel="nofollow">
  :warning: Postman (system 64bit or 32bit)
</a>

<br>

## Como rodar a aplicação.

<p>
  1-Primeiro de tudo vamos baixar o docker rodando o comando a seguir.<br>
</p>

<pre>
  <code>
    "sudo docker pull mysql"
  </code>
</pre>

<p>
  2- Logo após isso vamos criar a nossa imagem e container.<br>
</p>

<pre>
  <code>
    "sudo docker run --name airfluencers_mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 -d mysql"
  </code>
</pre>

<p>
  3- Listar todos os containers da máquina.<br>
</p>

<pre>
  <code>
    "sudo docker ps -a"
  </code>
</pre>

<p>
  4- Agora vamos entrar no modo bash<br>
</p>

<pre>
  <code>
    "sudo docker exec -it airfluencers_mysql /bin/bash"
  </code>
</pre>

<p>
  5- Logo após entrar em modo bash, vamos rodar o seguinte comando para entrar no mysql command line.
  Lembrando que as informação são -u(nome de usuário no mysql, no caso root) e -p(senha escolhida na criação)
  do container.<br>
</p>

<pre>
  <code>
    "mysql -uroot -pdocker"
  </code>
</pre>

<p>
  6- Entrando no modo mysql, vamos poder criar a database rodando o seguinte comando.<br>
</p>

<pre>
  <code>
    "create database airfluencers;"
  </code>
</pre>

<p>
  7- Deslogar do mysql command line e bash é só escrever exit.
</p>

<p>
  8- No terminal, clone o projeto:
</p>

<pre>
  <code>
    "git clone"
  </code>
</pre>

<p>
  9- Entra na pasta do projeto agora baixado:
</p>

<pre>
  <code>
    "cd pasta tal"
  </code>
</pre>

<p>
  10- Instale as dependencias:
</p>

<pre>
  <code>
    "yarn"
  </code>
</pre>

<p>
  11- Agora execute a aplicação:
</p>

<pre>
  <code>
    "yarn start"
  </code>
</pre>

## Comandos SQL

<p>
  Comando para criar tabela clubs.
</p>

<pre>
  <code>
    "CREATE TABLE clubs(
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      nameOfTeam VARCHAR(40) NOT NULL,
      yearOfFoundation VARCHAR(10),
      stateOfClub VARCHAR(20)
    );"
  </code>
</pre>

<p>
  Comando para trazer os dados da tabela clubs.
</p>

<pre>
  <code>
    "SELECT * FROM clubs;"
  </code>
</pre>

<p>
  Comando para criar tabela games.
</p>

<pre>
  <code>
    "CREATE TABLE games (
      id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
      nameOfTeamA varchar(20) NOT NULL,
      nameOfTeamB varchar(20) NOT NULL,
      golsFromTeamA INT NOT NULL,
      golsFromTeamB INT NOT NULL,
      scoreboard varchar(5) NOT NULL
    );"
  </code>
</pre>

<p>
  Comando para trazer os dados da tabela games.
</p>

<pre>
  <code>
    "SELECT * FROM games;"
  </code>
</pre>

<p>
  Comando para criar tabela gamesPoints.
</p>

<pre>
  <code>
    "CREATE TABLE gamesPoints (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      idOfGame INT NOT NULL,
      idOfTeamA INT NOT NULL,
      idOfTeamB INT NOT NULL,
      qtdPointsForTeamA INT NOT NULL,
      qtdPointsForTeamB INT NOT NULL,
      FOREIGN KEY (idOfGame) REFERENCES games(id),
      FOREIGN KEY (idOfTeamA) REFERENCES clubs(id),
      FOREIGN KEY (idOfTeamB) REFERENCES clubs(id)
    );"
  </code>
</pre>

<p>
  Comando para trazer os dados da tabela gamesPoints.
</p>

<pre>
  <code>
    "SELECT * FROM gamesPoints;"
  </code>
</pre>


<p>
  Comando para criar a tabela users.
</p>

<pre>
  <code>
    "CREATE TABLE users(
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      userName VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      userPassword VARCHAR(255) NOT NULL
    );"
  </code>
</pre>

<p>
  Comando para trazer os dados da tabela users.
</p>

<pre>
  <code>
    "SELECT * FROM users;"
  </code>
</pre>
