import { useState } from 'react';
import style from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [name, setName] = useState("");

  const handleChange = (event) => {
     setName(event.target.value);
  }

  return (
    <div>
      <div className={style.container}>
        <input 
          type='search' 
          onChange={handleChange} 
          value={name}
          className={style.input}
        />
        <button onClick={() => {
          onSearch(name);
        }} className={style.button}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
