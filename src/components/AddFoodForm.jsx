import {  Input, Button, Divider } from "antd"
import { useState } from "react"


function AddFoodForm({addFood}) {
    
                            // only write parts of useState then it is important automatically
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")


// inside the function handleSubmit you need to use the food information inside your form and add it to your Food array
    const handleSubmit = (e) => {
        e.preventDefault()
        const newFood = { name, image, calories, servings };
        
    
    addFood(newFood);
    
    setName("");
    setImage("");
    setCalories("");
    setServings("");
    };


    return (
            <form onSubmit={handleSubmit}> {/*   <== ADD EVENT */}
                  <Divider>Add form</Divider>
                <label>Name</label>                                 {/* to see the value */}
                <Input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Image</label>
                <Input name="image" type="url" value={image} onChange={(e) => setImage(e.target.value)} />
                <label>Calories</label>
                <Input name="calories" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
                <label>Servings</label>
                <Input name="servings" type="number" value={servings} onChange={(e) => setServings(e.target.value)} />
                
                <Button type="submit">Add Food</Button>
            </form>
  

    )
}

export default AddFoodForm