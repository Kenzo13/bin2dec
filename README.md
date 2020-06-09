## Titulo do projeto
<h1 align="center">Vaga Backend Developer JR - AIRFLUENCERS</h1>

## Descrição do Projeto
<p align="justify">
  Desenvolver uma aplicação capaz de simular um campeonato de futebol,contendo 4 times.
</p>

<!-- <img src="https://img.shields.io/static/v1?label=node&message=framework&color=blue&style=for-the-badge&logo=NODE"/> -->

## O que a plataforma é capaz de fazer :checkered_flag:

:trophy: Criar seus próprios times.<br>
:trophy: Criar seus próprios jogos utilizando esses times.<br>
:trophy: Acompanhar a tabela de classificação.<br>

## Status do Projeto: Concluido :heavy_check_mark:

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