import React, { useState } from 'react';
import NavBar from "../components/navBarComponent/NavBarComponent.jsx";
import ButtonNewSession from "../components/buttonComponent/ButtonNewSession";
import "../style/CoffeeTasting.sass";
import RecipeItems from "../components/recipeItems/RecipeItemsComponent.jsx";


export default function CoffeTasting() {

    const [recipeItemsList, setRecipeItemsList] = useState([]);

    const addNewRecipeItem = () => {
        setRecipeItemsList([...recipeItemsList, <RecipeItems key={recipeItemsList.length} />]);
    };


    return (
        <>
            <div className="contener">
                <NavBar></NavBar>
                <ButtonNewSession label={"Nova Receita"} onClick={addNewRecipeItem}/>
                {recipeItemsList}
            </div>
        </>
    )
}