# Curso - Testes automatizados com Cypress - Básico

👋 Seja bem-vindo(a)!

Conteúdo do curso de Curso Cypress Básico apresentado pleo prof° Walmyr Filho.

## O que foi ensinado no curso

Durante o curso de testes automatizados com Cypress (básico), você vai aprender:

- Como configurar um projeto Cypress do zero
- Como visitar páginas locais e remotas
- Como lidar com os elementos mais comuns encontrados em aplicações web
- Como testar _upload_ de arquivos
- Como realizar as mais diversas verificações de resultados esperados
- Como criar comandos customizados
- Como lidar com links que abrem em outra aba do navegador
- Como rodar testes simulando as dimensões de um dispositivo móvel
- Como resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents)
- Como executar os testes em um _pipeline_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes)
- Como criar uma documentação mínima para seu projeto de testes automatizados

## Requerimentos para o projeto

São necessários o Node.js e npm instalados para execução do projeto.
>Foram utilizados Node.js (v16.16.0) e NPM (8.11.0)

## Instalação

Executar o comando `npm install` no terminal na raiz do projeto (ou `npm i`), para instalação das dependencias.

## Testes

Executar o comando `npm test` no terminal para execução dos testes em modo handless.
No mobile em modo handless, executar o comando `npm test:mobile`, que será executado com tamanho de tela 410x860.

Para modo interativo, executar o comando `npm run cy:open`.
Em mobile no modo interativo executar o comando `npm run cy:open:mobile`.

___
