import { render, screen, fireEvent } from '@testing-library/react';
import CoffeTasting from '../CoffeeTasting';
import '@testing-library/jest-dom';

jest.mock('../../components/recipeItems/RecipeItemsComponent.jsx', () => {
    return function DummyRecipeItems() {
        return <div data-testid="recipe-item">Recipe Item</div>;
    };
});


describe('CoffeTasting', () => {
    test('deve renderizar a página corretamente', () => {
        render(<CoffeTasting />);

        const button = screen.getByText('Nova sessão de prova');
        expect(button).toBeInTheDocument();

        const recipeItems = screen.queryAllByTestId('recipe-item');
        expect(recipeItems).toHaveLength(0);
    });

    test('deve adicionar um novo item de receita ao clicar no botão', () => {
        render(<CoffeTasting />);

        const button = screen.getByText('Nova sessão de prova');
        fireEvent.click(button);

        const recipeItems = screen.queryAllByTestId('recipe-item');
        expect(recipeItems).toHaveLength(1);

        fireEvent.click(button);

        const updatedRecipeItems = screen.queryAllByTestId('recipe-item');
        expect(updatedRecipeItems).toHaveLength(2);
    });
});
