export type RootStackParamList = {
  Drawer: undefined;
  MealsCategories: undefined;
  MealsOverview: {
    categoryId: string;
    category: string;
  };
  MealDetail: {
    mealId: string;
  };
  Favorites: undefined;
};
