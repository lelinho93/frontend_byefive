# Projeto Seletivo Byefive - Frontend

Acesse o deploy no surge: uneven-stamp.surge.sh/

* Objetivo:

Este projeto tem por objetivo o desenvolvimento de uma aplicação fullstack com Javascript para avaliação técnica da empresa Byefive.

* Tecnologias empregadas:

Este projeto foi desenvolvido utilizando Framework React.js no frontend (lib material-ui, styled-components, hooks, custom hooks, useState, useEffect, axios e outras)

Node.js no backend( Typescript, express, bcrypt, jsonwebtoken, mongoose)

MongoDB como banco de dados.

* Funcionalidades:

Este sistema é um gerenciador de cadastros de usuários, nele é possível criar o seu login inserindo nome, email e senha e permite fazer um login com esse cadastro. Após feito o cadastro o usuário é autenticado no sistema através de um token jwt, só é possível permanecer na parte "interna" do sistema se o usuário estiver autenticado.
Dentro do sistema há três abas, a primeira permite visualizar todos os usuários cadastrados no banco de dados, com seu nome, email e ID. Na segunda aba é possível deletar um usuário informando o seu ID e na terceira aba é possível fazer um lougout do sistema, onde o usuário é direcionado para a página de login e o seu token é retirado, fazendo que não esteja mais autenticado.

# Como rodar?

* Para rodar este projeto em sua máquina local é necessário ter a última versão do Node.js instalado (https://nodejs.org/en/)
* Clonar esse repositório em sua máquina local atráves do seu terminal git
* Com o terminal na pasta raiz do projeto (byefive_front) é só rodar o comando <npm run start> que o node irá rodar a aplicação e abrir uma aba em seu navegador para que possa visualizar e usar a plataforma.

