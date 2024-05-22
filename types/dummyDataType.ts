export interface CategoryItemType {
  id: string;
  title: string;
  color: string;
  imageUrl: string;
}

export interface MealItemType {
  id: string;
  categoryIds: string;
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}
