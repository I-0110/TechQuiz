describe('quiz component', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('should have a start button', () => {
    cy.get('button').contains('Start Quiz')
  })
})