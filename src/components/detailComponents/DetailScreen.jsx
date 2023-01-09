import React from "react";
import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
      console.log(res.data)
    });
  }, []);
  return (
    <section className={styles.details_page}>
      <div
        style={{
          backgroundSize: "cover",
          background: `url(${recipe.image_url})`,
        }}
        className={styles.recipe_img}
      >
        <h1 className={styles.recipe_name}>{recipe.recipe_name}</h1>
      </div>
      <div className={styles.recipe_details}>
        <div className={styles.recipe_steps}>
          <div className={styles.recipe_info}>
            <h3>Recipe</h3>
            <h5>Prep Time: {recipe.prep_time}</h5>
            <h5>Cook Time: {recipe.cook_time}</h5>
            <h5>Serves: {recipe.serves}</h5>
          </div>
          <div className={styles.recipe_ingredients}>
            <h3>Ingredients</h3>
              {recipe.ingredients && recipe.ingredients.map((ingredient,index) => {
                return <h5>{ingredient.quantity} {ingredient.ingredient}</h5>
              }
              )}
          </div>
        </div>
        <div className={styles.recipe_intructions}>
          <h3>Instructions</h3>
          <p style = {{whiteSpace: "pre-wrap"}}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
