import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RecipeItems from './RecipeItemsComponent';
import GetRecipeClassic from '../../service/GetRecipeClassic';

jest.mock('../../service/GetRecipeClassic', () => jest.fn());

describe('RecipeItems Component', () => {
  beforeEach(() => {
    GetRecipeClassic.mockResolvedValue({
      nome: 'Receita de Teste',
      ingredientes: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3'],
      instrucoes: 'Instruções de teste',
    });
  });

  test('deve renderizar corretamente o título e nome da receita', async () => {
    render(<RecipeItems />);

    await waitFor(() => screen.getByText('Receita de Teste'));

    expect(screen.getByText('Receita')).toBeInTheDocument();
    expect(screen.getByText('Receita de Teste')).toBeInTheDocument();
  });

  test('deve exibir detalhes da receita ao clicar no botão', async () => {
    render(<RecipeItems />);

    await waitFor(() => screen.getByText('Receita de Teste'));

    fireEvent.click(screen.getByText('Ver Receita'));

    expect(screen.getByText('Ingredientes:')).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Ingrediente 1'))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Ingrediente 2'))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Ingrediente 3'))).toBeInTheDocument();
    expect(screen.getByText('Instruções:')).toBeInTheDocument();
    expect(screen.getByText('Instruções de teste')).toBeInTheDocument();
  });

  test('deve esconder os detalhes da receita ao clicar novamente no botão', async () => {
    render(<RecipeItems />);

    await waitFor(() => screen.getByText('Receita de Teste'));

    fireEvent.click(screen.getByText('Ver Receita'));

    expect(screen.getByText((content) => content.includes('Ingrediente 1'))).toBeInTheDocument();

    fireEvent.click(screen.getByText('Ver Receita'));

    expect(screen.queryByText((content) => content.includes('Ingrediente 1'))).not.toBeInTheDocument();
  });

  test('deve exibir mensagem de erro caso a API falhe', async () => {
    GetRecipeClassic.mockRejectedValue(new Error('Erro ao buscar receita'));

    render(<RecipeItems />);

    await waitFor(() => expect(screen.queryByText('Receita de Teste')).not.toBeInTheDocument());
  });
});
