// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({filteredItems}) {
  const [query , setQuery] = useState("") 

  const handleInput = (event) => {
    event.preventDefault()
    setQuery(event.target.value)
    filteredItems(event.target.value)
  }
  return (
    <>
      <Divider>Search</Divider>
      <Input value={query} type="text" onChange={handleInput} />
    </>
  );
}

export default Search;
