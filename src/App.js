import './App.css';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search"
import foods from "./foods.json"

function App() {
   
  const [show, setShow] = useState(true);
  const [foodlist, setFoodList] = useState(foods);
  const [food, setFood] = useState(foods)

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodlist, newFood];
    setFoodList(updatedFoods)

  };

  const filteredItems = (searchQuery) => {
    if(searchQuery) {
      let filterArray = foodlist.filter(foodItem => {
        return foodItem.name.toLowerCase().includes(searchQuery.toLowerCase())
      })
      setFood(filterArray)
    }}

    
  const deleteFood = (name) => {
    const filteredFoods = foodlist.filter(food => {
      return food.name !== name
    })

  const filteredFood = food.filter(food => {
    return food.name !== name
  })

  setFoodList(filteredFoods)
  setFood(filteredFood)
};


  return (
    
    <div className="App">

      {/* Display Add Food component here */}
      {/* Iteration 7 | Bonus | Hide the Add Food Form */}
      <Button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </Button>
      {show && <AddFoodForm addFood={addNewFood} />} {/* <== UPDATE */}


        {/* Display Search component here */}
        <Search filteredItems={filteredItems}/>
        <Divider>Food List</Divider>

   
        <Row  style={{ width: '100%', justifyContent: 'center' }}>
        {food.map(food => {
          return (
        <FoodBox key={food.name} food={{
          name: food.name,
          calories: food.calories,
          image: food.image,
          servings: food.servings
        }}
        deleteFood={deleteFood} />
        )}
      )}
       </Row>
    </div>
        
  )
      }
 

export default App;
