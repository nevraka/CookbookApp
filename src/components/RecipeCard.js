import React from 'react';
import { Item, Label } from 'semantic-ui-react';
import './recipecard.css';

function RecipeCard({ recipes }) {
  if (recipes.length === 0) {
    return null;
  }
  return (
    <div className="allcards">
      {recipes.map((recipe) => {
        return (
          <Item.Group>
            <Item>
              <Item.Image src={recipe.recipe.image} />
              <Item.Content>
                <Item.Header className="item-header" as="a">
                  {recipe.recipe.label}
                </Item.Header>
                {recipe.recipe.ingredientLines.map((ing) => {
                  return <Item.Description>{ing}</Item.Description>;
                })}
                {recipe.recipe.healthLabels.map((hl) => {
                  return (
                    <Label as="a" color="blue" className="label">
                      {hl}
                    </Label>
                  );
                })}
              </Item.Content>
            </Item>
          </Item.Group>
        );
      })}
    </div>
  );
}

export default RecipeCard;
