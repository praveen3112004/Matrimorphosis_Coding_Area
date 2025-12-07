import { gql } from "apollo-server";

export const typeDefs = gql`
  type Category {
    id: ID
    name: String
    description: String
    imageUrl: String
  }

  type Review {
    user: String
    comment: String
    rating: Float
    date: String
  }

  type Food {
    id: ID!
    name: String!
    description: String
    price: Float
    available: Boolean
    category: Category
    ingredients: [String]
    reviews: [Review]
  }

  input FoodFilter {
    categoryName: String
    minPrice: Float
    maxPrice: Float
  }

  type Query {
    # Main queries
    foods(
      limit: Int
      offset: Int
      orderBy: String
      order: String
      where: FoodFilter
    ): [Food]!

    getAllFoods(limit: Int, offset: Int): [Food!]!
    getFoodById(id: ID!): Food

    # Filtering & helper queries
    getFoodsByCategory(categoryName: String!, limit: Int, offset: Int): [Food!]!

    # Teaching extras
    categoriesList: [Category!]!
    reviewsByFood(foodId: ID!): [Review!]!
  }

  #--------------------------------------------------------------------------
  #mutations

  type Mutation {
    addFood(
      name: String!
      description: String
      price: Float
      available: Boolean
      categoryId: ID
    ): Food!

    updateFood(
      id: ID!
      name: String
      description: String
      price: Float
      available: Boolean
    ): Food

    deleteFood(id: ID!): Boolean

    bulkAddFoods(foods: [NewFoodInput!]!): [Food!]!
  }

  input NewFoodInput {
    name: String!
    description: String
    price: Float
    available: Boolean
    categoryId: ID
  }

  #==================================================================================
  #nested mutation
  input CategoryInput {
    id: ID
    name: String!
    description: String
    imageUrl: String
  }

  input FoodInput {
    name: String!
    description: String
    price: Float
    available: Boolean
  }

  type Mutation {
    addFoodWithCategory(
      categoryInput: CategoryInput!
      foodInput: FoodInput!
    ): Food!
  }
  #=====================bulk update mutation========================
  type Mutation {
    bulkUpdateFood(updates: [FoodUpdateInput!]!): [Food!]!
  }

  input FoodUpdateInput {
    id: ID!
    name: String
    description: String
    price: Float
    available: Boolean
  }
`;
