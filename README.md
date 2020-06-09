## Titulo do projeto
<h1 align="center">Vaga Backend Developer JR - AIRFLUENCERS</h1>

## Descrição do Projeto
<p align="justify">
  Desenvolver uma aplicação capaz de simular um campeonato de futebol,contendo 4 times.
</p>

<!-- <img src="https://img.shields.io/static/v1?label=node&message=framework&color=blue&style=for-the-badge&logo=NODE"/> -->

## O que a plataforma é capaz de fazer :checkered_flag:

:heavy_check_mark: - Criar seus próprios times.
:heavy_check_mark: - Criar seus próprios jogos utilizando esses times.
:heavy_check_mark: - Acompanhar a tabela de classificação.

## Status do Projeto: Concluido :heavy_check_mark:

## Pré-requisitos :warning:
<a href="https://nodejs.org/en/download/" rel="nofollow">
  NodeJs
</a>

<a href="https://classic.yarnpkg.com/en/docs/install/#debian-stable" rel="nofollow">
  Yarn
</a>

<a href="https://dev.mysql.com/doc/workbench/en/wb-installing.html" rel="nofollow">
  Mysql Workbench
</a>

<a href="https://insomnia.rest/download/" rel="nofollow">
  Insomnia (system 64bit)
</a>

<a href="https://www.postman.com/downloads/" rel="nofollow">
  Postman (system 64bit or 32bit)
</a>

## Como rodar a aplicação.

<p>
  1-Primeiro de tudo vamos baixar o docker rodando o comando a seguir.
  sudo docker pull mysql
</p>

<p>
  2- Logo após isso vamos criar a nossa imagem e container.
  sudo docker run --name airfluencers_mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 -d mysql
</p>

<p>
  3- Listar todos os containers da máquina.
  sudo docker ps -a
</p>

<p>
  4- Agora vamos entrar no modo bash
  sudo docker exec -it airfluencers_mysql /bin/bash
</p>

<p>
  5- Logo após entrar em modo bash, vamos rodar o seguinte comando para entrar no mysql command line.
  Lembrando que as informação são -u(nome de usuário no mysql, no caso root) e -p(senha escolhida na criação)
  do container.
  mysql -uroot -pdocker
</p>

<p>
  6- Entrando no modo mysql, vamos poder criar a database rodando o seguinte comando.
  create database airfluencers;
</p>

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