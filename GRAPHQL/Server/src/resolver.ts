import fetch from "node-fetch";


const MOCKAPI_FOODS_URL =
  "https://682f0974746f8ca4a47f828e.mockapi.io/fooddelivery/foodItems";


type AnyObj = { [k: string]: any };


async function fetchAllFoods(): Promise<AnyObj[]> {
  const res = await fetch(MOCKAPI_FOODS_URL);
  if (!res.ok) throw new Error(`Failed to fetch foods: ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data)) return [];
  return data;
}


async function fetchFoodById(id: string): Promise<AnyObj | null> {
  const res = await fetch(`${MOCKAPI_FOODS_URL}/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to fetch food ${id}: ${res.status}`);
  const data = await res.json();
  return data ?? null;
}




// ✅ Mutation Helper Functions


async function addFoodToAPI(food: AnyObj): Promise<AnyObj> {
  const res = await fetch(MOCKAPI_FOODS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(food),
  });
  if (!res.ok) {
    throw new Error(`Failed to add food: ${res.status}`);
  }
  return res.json();
}


async function updateFoodInAPI(id: string, updates: AnyObj): Promise<AnyObj> {
  const res = await fetch(`${MOCKAPI_FOODS_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  if (!res.ok) {
    throw new Error(`Failed to update food: ${res.status}`);
  }
  return res.json();
}


async function deleteFoodFromAPI(id: string): Promise<boolean> {
  const res = await fetch(`${MOCKAPI_FOODS_URL}/${id}`, {
    method: "DELETE",
  });


  if (!res.ok) {
    throw new Error(`Failed to delete food: ${res.status}`);
  }


  // ✅ Return true if deleted successfully
  return true;
}




//========================Nested mutations ======================================
// ✅ Helper to add Category
async function addFoodWithCategoryToAPI(
  categoryInput: AnyObj,
  foodInput: AnyObj
): Promise<AnyObj> {
  // Merge category object inside the food
  const foodWithCategory = {
    ...foodInput,
    category: categoryInput,
  };


  const res = await fetch(MOCKAPI_FOODS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(foodWithCategory),
  });


  if (!res.ok) {
    throw new Error(`Failed to add food with category: ${res.status}`);
  }


  return res.json();
}
//==========================bulk update mutation==============
// helper function
async function bulkUpdateFoodInAPI(updates: AnyObj[]): Promise<AnyObj[]> {
  const results = [];
  for (const update of updates) {
    const { id, ...rest } = update;
    const updatedFood = await updateFoodInAPI(id, rest); // reuse existing updateFoodInAPI
    results.push(updatedFood);
  }
  return results;
}




//end - helper function for mutations


export const resolvers = {
  Query: {
    // foods: async () => {
    //   return fetchAllFoods(); // same helper function
    // },
    // foods: async (_: any, args: { limit?: number; offset?: number }) => {
    //   const { limit, offset } = args;
    //   const allFoods = await fetchAllFoods();


    //   // Apply offset & limit if provided
    //   const start = offset ?? 0;
    //   if (typeof limit === "number") {
    //     return allFoods.slice(start, start + limit);
    //   }
    //   return allFoods.slice(start);
    // },
    foods: async (
      _: any,
      args: {
        limit?: number;
        offset?: number;
        orderBy?: string;
        order?: string;
        where?: { categoryName?: string; minPrice?: number; maxPrice?: number };
      }
    ) => {
      const { limit, offset, orderBy, order, where } = args;
      let allFoods = await fetchAllFoods();


      // --- Filter (WHERE clause) ---
      if (where) {
        if (where.categoryName) {
          allFoods = allFoods.filter(
            (f: any) =>
              f.category?.name?.toLowerCase() ===
              where.categoryName.toLowerCase()
          );
        }
        if (where.minPrice !== undefined) {
          allFoods = allFoods.filter((f: any) => f.price >= where.minPrice);
        }
        if (where.maxPrice !== undefined) {
          allFoods = allFoods.filter((f: any) => f.price <= where.maxPrice);
        }
      }


      // --- Sort (ORDER BY) ---
      if (orderBy) {
        const dir = order?.toLowerCase() === "desc" ? -1 : 1;
        allFoods.sort((a: any, b: any) => {
          if (a[orderBy] < b[orderBy]) return -1 * dir;
          if (a[orderBy] > b[orderBy]) return 1 * dir;
          return 0;
        });
      }


      // --- Pagination ---
      const start = offset ?? 0;
      if (typeof limit === "number") {
        return allFoods.slice(start, start + limit);
      }
      return allFoods.slice(start);
    },


    getAllFoods: async (_: any, args: { limit?: number; offset?: number }) => {
      const { limit, offset } = args;
      const foods = await fetchAllFoods();
      const off = offset ?? 0;
      if (typeof limit === "number") return foods.slice(off, off + limit);
      return foods.slice(off);
    },


    getFoodById: async (_: any, { id }: { id: string }) => {
      return (await fetchFoodById(id)) ?? null;
    },


    getFoodsByCategory: async (
      _: any,
      {
        categoryName,
        limit,
        offset,
      }: { categoryName: string; limit?: number; offset?: number }
    ) => {
      const foods = await fetchAllFoods();
      const filtered = foods.filter(
        (f: AnyObj) =>
          f.category?.name?.toLowerCase() === categoryName.toLowerCase()
      );
      const off = offset ?? 0;
      if (typeof limit === "number") return filtered.slice(off, off + limit);
      return filtered.slice(off);
    },


    categoriesList: async () => {
      const foods = await fetchAllFoods();
      const map: Record<string, AnyObj> = {};
      for (const f of foods) {
        if (f.category?.id) map[f.category.id] = f.category;
      }
      return Object.values(map);
    },


    reviewsByFood: async (_: any, { foodId }: { foodId: string }) => {
      const food = await fetchFoodById(foodId);
      if (!food) return [];
      return Array.isArray(food.reviews) ? food.reviews : [];
    },
  },


  Food: {
    category: (parent: AnyObj) => parent.category ?? null,
    reviews: (parent: AnyObj) =>
      Array.isArray(parent.reviews) ? parent.reviews : [],
    ingredients: (parent: AnyObj) =>
      Array.isArray(parent.ingredients) ? parent.ingredients : [],
  },
  //resolver for mutation
  Mutation: {
    // ✅ 1. Add Food
    addFood: async (_: any, args: AnyObj) => {
      return await addFoodToAPI(args);
    },


    // ✅ 2. Update Food
    updateFood: async (_: any, args: AnyObj) => {
      const { id, ...rest } = args;
      return await updateFoodInAPI(id, rest);
    },


    // ✅ 3. Delete Food
    deleteFood: async (_: any, { id }: { id: string }) => {
      return await deleteFoodFromAPI(id);
    },


    //========================================Nested mutation========================
    addFoodWithCategory: async (
      _: any,
      { categoryInput, foodInput }: { categoryInput: AnyObj; foodInput: AnyObj }
    ) => {
      return await addFoodWithCategoryToAPI(categoryInput, foodInput);
    },
    //==============================bulk update mutation============================
    bulkUpdateFood: async (_: any, { updates }: { updates: AnyObj[] }) => {
      return await bulkUpdateFoodInAPI(updates);
    },
  },
};
