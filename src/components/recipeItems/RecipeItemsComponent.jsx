import React, { useState, useEffect } from 'react';
import "../recipeItems/RecipeItemsComponent.sass";
import GetRecipeClassic from '../../service/GetRecipeClassic';

export default function RecipeItems() {
    const [showRecipe, setShowRecipe] = useState(false);
    const [recipeData, setRecipeData] = useState({
        title: '',
        name: '',
        ingredients: [],
        instructions: ''
    });

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const randomRecipe = await GetRecipeClassic();
                setRecipeData({
                    title: "Receita",
                    name: randomRecipe.nome,
                    ingredients: randomRecipe.ingredientes,
                    instructions: randomRecipe.instrucoes
                });
            } catch (error) {
                console.error("Erro ao buscar receita:", error);
            }
        };

        fetchRecipe();
    }, []);

    const handleClick = () => {
        setShowRecipe(!showRecipe);
    };

    return (
        <>
            <div className="div-recipe-items">
                <div className='div-title-name'>
                    <label className='title-div-recipe'>{recipeData.title}</label>
                    <label className='name-div-recipe'>{recipeData.name}</label>
                    {showRecipe && (
                        <div className="recipe-details">
                            <h3>Ingredientes:</h3>
                            <ul>
                                {recipeData.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient},</li>
                                ))}
                            </ul>
                            <h3>Instruções:</h3>
                            <p>{recipeData.instructions}</p>
                        </div>
                    )}
                </div>
                <button onClick={handleClick} className='button-view-recipe'>Ver Receita</button>


            </div>
        </>
    )
}