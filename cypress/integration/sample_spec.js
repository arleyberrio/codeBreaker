describe('Test front codebreaker', () => {
  it('Visits the codebreaker page', () => {
    cy.visit('/')
  })
  it('clicks the button "Generar número"', () => {
    cy.visit('/')

    cy.contains('Generar número').click()
  })
  it('Input writing a number', () => {
    cy.visit('/')
    cy.get('input[name=inputGuess]').type('1234')
  })
  it('Input writing a text', () => {
    cy.visit('/')
    cy.get('input[name=inputGuess]').type('hola')
  })
  it('Send input number', () => {
    cy.visit('/')
    cy.get('input[name=inputGuess]').type('1234{enter}')
  })
  it('See the emty', () => {
    cy.visit('/')
    cy.get('div[name=tablero]').should('be.empty')
  })
  it('See the result', () => {
    cy.visit('/')
    cy.contains('Generar número').click()
    cy.get('input[name=inputGuess]').type('1234{enter}')
    cy.get('div[name=tablero]').should('not.be.empty')
  })
  
})
