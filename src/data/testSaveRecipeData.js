function TestSaveData () { 
  let array = [
    {
    username: "test",
    _id : 1234,
    title: "testRecipe",
    readyInMinutes: 20,
    servings: 4,
    sourceUrl: "www.test.com",
    image: "test",
    cuisines: ["Asian", "indian"],
    dishTypes: ["breakfast", "lunch"],
    diets: ["healthy", "paleo"],
    instructions: ["1", "2"],
    create_date: Date.now(),
    modified_date: Date.now() 
    }
  ]
  return array
  };
  
  export default TestSaveData;
  


