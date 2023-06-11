// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Button, Col } from 'antd';

// Iteration 2
function FoodBox({food, deleteFood}) {

  return (

      <Col>
          <Card
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={food.image} height={60} alt="food" />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
              <b>Total Calories: {food.calories * food.servings} </b> kcal

              {/*when we multiply we do it in just one curly braces*/}
            </p>
            <Button onClick={() => deleteFood(food.name)} className="btn-delete">
              Delete
            </Button>
          </Card>
          </Col>
  );
}

export default FoodBox;

/*import { useState } from 'react';
import { Card, Col, Button } from 'antd';
import foodsJson from "../foods.json" // try to look what "" with one or more dot shows. the file will show up if it is correct
import Search from './Search';

// Iteration 2
function FoodBox() { // {} inside () are descostructing the props object
  // console.log("lets see our props") 
    
  // Json always needs to be in uppercase to work!
  /*const [foods, setFoods] = useState(foodsJson); // foodsJson ensures to get the entire array instead of doing foodsJson[] to get specific ones
  console.log("initial state of food", foods)

  // I used id before to delete but there is no id in foods.json so using name instead
  const deleteFood = (foodName) => {
    const filteredFood =  foods.filter(food => {

      return food.name !== foodName;
      
    });
    console.log(filteredFood)
    setFoods(filteredFood);
  }



  const filteredItems = (searchQuery) => {
    if(searchQuery) {
      let filterArray = foods.filter((food) => {
        return food.name.toLowerCase().includes(searchQuery.toLowerCase())
      })
      setFoods(filterArray)
    }
   
  }

  return (
    <>
      <Search filteredItems={filteredItems}/>
      <Col>
      {/*lets look at the foods array and map it
  for each element (food) inside foods array lets create a component Foodbox with that information
  and we are using a map method
    {foods.map( (food) => {
      return (
        <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>                   
          <b>Total Calories: {food.calories * food.servings} </b> kcal 
          
           when we multiply we do it in just one curly braces 
        </p>
        <Button onClick={() => deleteFood(food.name)} className="btn-delete">
              Delete 
            </Button>
      </Card>
      )
    } )}
      
    </Col>
    </>

  );
}


export default FoodBox;*/
