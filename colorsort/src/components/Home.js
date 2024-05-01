import { useState } from 'react';
import Colors from './Colors'
import Column from './Column'
import './Home.css'

const Home = () => {
    const [numColumns, setNumColumns] = useState(0)
    const [columns, setColumns] = useState([])
    const colors=["Blue", "Red", "Green"]
    const [currColor, setCurrColor] = useState("")

    const handleChange = (event) => {
        setNumColumns(event.target.value);
      };
    const handleSubmit = (event) => {
        createColumns(numColumns)
        event.preventDefault();
      };

    const createColumns = (numColumns) => {
        const newColumns = [];
        for(let i = 0; i < numColumns; i++) {
            newColumns.push(<Column />)
        }
        setColumns(newColumns)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Number of columns:
                    <input value={numColumns} onChange={handleChange}></input>
                </label>
                <button type="submit">
                    Generate columns
                </button>
            </form>
            {colors.map((color)=> {
                return (
                    <Colors color={color} setCurrColor={setCurrColor}/>
                )
            })}
            <p>current color:</p>
            <div id="currentColor" style={{backgroundColor: currColor}}>{currColor}</div> 
            <div id="stacks">
                {columns}
            </div>
        </div>
    );
}
 
export default Home;