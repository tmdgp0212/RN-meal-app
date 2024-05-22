export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {
    categoryId: string;
    category: string;
  };
  MealDetail: {
    mealId: string;
  };
};