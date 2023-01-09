import React from "react";
import styles from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  console.log(recipe);
  return (
    <div className={styles.recipe_card}>
      <div>
        <div className={styles.recipe_img}>
          <img src={recipe.image_url} alt={recipe.recipe_name} />
        </div>
        <h3 className={styles.recipe_name}>{recipe.recipe_name}</h3>
      </div>
      <button
        onClick={() => {
          navigate(`/recipe/${recipe.recipe_id}`);
        }}
        className={styles.recipe_more_btn}
      >
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
