import React from "react";

const Recipe = () => {
  // Sample recipe data
  const recipe = {
    name: "Chocolate Cake",
    image: "/img/pexels-abhinavcoca-291528.jpg",
    ingredients: [
      "1 cup sugar",
      "1/2 cup butter",
      "2 eggs",
      "1 1/2 cups flour",
      "1/2 cup cocoa powder",
      "1 tsp baking powder",
      "1 tsp vanilla extract",
      "1/2 cup milk",
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Grease and flour a 9x9 inch pan.",
      "In a medium bowl, cream together the sugar and butter. Beat in the eggs, one at a time, then stir in the vanilla.",
      "Combine flour and baking powder, add to the creamed mixture and mix well. Finally, stir in the milk until batter is smooth.",
      "Pour or spoon batter into the prepared pan.",
      "Bake for 30 to 40 minutes in the preheated oven. Cake is done when it springs back to the touch.",
    ],
  };
  // const ingredientList = [];
  return (
    <div className="recipe-page">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}

        {/* {recipe.ingredients.forEach((ingredient, index) => {
          ingredientList.push(<li key={index}>{ingredient}</li>);
        })} */}

      </ul>
      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
