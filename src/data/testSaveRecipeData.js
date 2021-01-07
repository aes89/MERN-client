function TestSaveData () { 
  let array = [
    {
    username: "test",
    _id : 1234,
    title: "testRecipe",
    readyInMinutes: 20,
    servings: 4,
    sourceUrl: "www.test.com",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80",
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
  


