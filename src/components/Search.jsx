import { useState } from "react";
import { Divider, Input } from 'antd';

// Iteration 5 | Implement search bar
function Search({filteredItems}) {
  const [query , setQuery] = useState() 

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



/*function Search = (food) => {
    return (
        { food.map(name => {
            return <p> { name } </p>
          })}
          
    )
}
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);


/*const Search = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};*/


/*const Search = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);*/



/*function Search (foods) {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
          foods.filter((food) => {
          return food.name.match(searchInput);
      });
      }
  
    return(
        <div>
          <label>Search</label>
          <br></br>
          <input type='text' placeholder='search...' onChange={handleChange}></input>
          <button type="submit">Submit</button>
        </div>    
    )
  }


/*const Search = () => {}

const [searchInput, setSearchInput] = useState("");

const foods = [ 
    {
    "name": String,
    "calories": Number,
    "image": {
        type: String,
        default: ""
    },
    "servings": Number,
    }
];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
      foods.filter((food) => {
      return food.name.match(searchInput);
  });
  }

  return <div>

  <input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />

<table>
  <tr>
    <th>Name</th>
    <th>Calories</th>
  </tr>
 

{foods.map((food, *index*) => {


<div>
  <tr>
    <td>{food.name}</td>
    <td>{food.calories}</td>
  </tr>
  </div>

})}
</table>

</div>

};*/


export default Search;