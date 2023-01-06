/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('./src/index.html')
})

describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
        cy.title()
        .should('be.equal','Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatorios e envia o formulário', function() {
        cy.get('[id="firstName"]').type('Leonardo');
        cy.get('#lastName').type('Freitas');
        cy.get('#email').type('leo@teste.com.br', { delay: 0});

        cy.get('#open-text-area').type('Teste de spec Cypress');

        cy.get('.button').click();

        cy.get('.success > strong').should('be.visible');
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#email').type('leoteste.com.br', { delay: 0});

        cy.get('.button').click();

        cy.get('.error').should('have.class', 'error')
    })

    it('mantem em branco campo de telefone quando digitado valor não numérico', function() {
        cy.get('#phone')
          .type('abc')
          .should('not.contain.text', 'abc')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', 
    function() {
        cy.get('#phone-checkbox').check();

        cy.get('[id="firstName"]').type('Leonardo');
        cy.get('#lastName').type('Freitas');
        cy.get('#email').type('leo@teste.com.br', { delay: 0});

        cy.get('.button').click();

        cy.get('.error').should('have.class', 'error')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {

        cy.get('[id="firstName"]')
          .type('Leonardo')
          .should('have.value', 'Leonardo')
          .clear()
          .should('have.value', '');

        cy.get('#lastName')
          .type('Freitas')
          .should('have.value', 'Freitas')
          .clear()
          .should('have.value', '');

        cy.get('#email')
          .type('leo@teste.com.br', { delay: 0})
          .should('have.value', 'leo@teste.com.br')
          .clear()
          .should('have.value', '');

    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {

        cy.get('.button').click();

        cy.get('.error').should('have.class', 'error');

    })


    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit();

        cy.get('.success').should('be.visible');
    })

    it('verificar elementos atraves do uso do contains', function() {
        cy.contains('#check > label[for="phone"]', 'Telefone')
        
        cy.contains('button', 'Enviar').click();


    })

    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('select')
          .select('YouTube')
          .should('have.value', 'youtube');
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('select')
          .select('mentoria')
          .should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function() {
        cy.get('#product')
          .select(1)
          .should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback"', function() {
        cy.get('#support-type > label> input[value="feedback"]').check();
    })

    it('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]').each(($radio) => {
            cy.wrap($radio).check();
            cy.wrap($radio).should('be.checked');
        })
    })

    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('input[type="checkbox"]')
          .check()
          .last()
          .uncheck()
          .should('not.be.checked');

    })

    it('seleciona um arquivo da pasta fixtures', function() {
        cy.get('#file-upload')
          .selectFile('./cypress/fixtures/example.json')
          .should(($input) => {
            expect($input[0].files[0].name).to.equal('example.json')
          })
        //   pego o input e imprimo no console, que devolve um array, onde pego o primeiro elemento [0]
        //  depois dentro deste elemento temos outro elemento que possui um array files[0] que pego o primeiro elemento
        // dentro deste objeto possuimos o atributo name, que é o nome do arquivo anexado.
    })

    it.only('seleciona um arquivo simulando um drag-and-drop', function() {
        cy.get('#file-upload')
          .selectFile('./cypress/fixtures/example.json', { action: "drag-drop" })
          .should(($input) => {
            expect($input[0].files[0].name).to.equal('example.json')
          })
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example').as('sampleFile')
        cy.get('#file-upload')
          .selectFile('@sampleFile')
          .should(($input) => {
            expect($input[0].files[0].name).to.equal('example')
          })
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',
    function() {
        cy.get('a')
          .should('have.attr', 'target', '_blank')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link',
    function() {
        cy.get('a')
          .invoke('removeAttr', 'target')
          .click();
    })


})



