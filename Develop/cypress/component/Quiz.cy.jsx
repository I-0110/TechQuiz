import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
    it('should render the Quiz component', () => {
        cy.mount(<Quiz />);
    });

    it('should render the Quiz component with the proper content', () => {
        cy.get('div').should('have.card p-4');
        cy.get('h2').should('have.currentQuestions', 'question');
        cy.get('div').should('have.currentQuestion.answers.map');
        cy.get('button').should('have.alert','Correct');
    });
});
