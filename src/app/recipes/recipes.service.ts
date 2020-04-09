import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      imageUrl:"https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg",
      ingredients:["French Fries", "Pork Meat","Salad"]
    },
    {
      id: "r2",
      title: "Spaghetti",
      imageUrl:"https://www.spendwithpennies.com/wp-content/uploads/2019/03/Spaghetti-and-Meatballs-SpendWithPennies-4-500x500.jpg",
      ingredients:["Spaghetti", "Meat","Tomatoes"]
    }
  ];

  constructor() { }

  public getAllRecipes(){
    return [...this.recipes];
  }
  public getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
        })
    };
  }

  public deleteRecipe(recipeId:string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    } );
  }

}
