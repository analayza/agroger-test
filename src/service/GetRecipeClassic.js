import Api from "../service/Api.js"

export default async function GetRecipeClassic() {
    try {
        const response = await Api.get("/recipe");
        const recipes = response.data;

        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
        return randomRecipe;

    } catch (error) {
        console.error("Erro ao buscar receita classic:", error);
        throw error;
    }
}