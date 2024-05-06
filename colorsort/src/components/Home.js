import { useState, useEffect } from 'react';
import Colors from './Colors'
import Column from './Column'
import EmptyColumn from './EmptyColumn'
import './Home.css'


const Home = () => {
    const [numColumns, setNumColumns] = useState(0)
    const [columns, setColumns] = useState([])
    const colors=["Blue", "Red", "Green", "Pink", "Yellow", "Orange", "Purple", "Gray", "Aquamarine", "Brown", "SkyBlue", "HotPink"]
    const [colorsShown, setColorsShown] = useState([])
    const [currColor, setCurrColor] = useState("")
    const [stacks, setStacks] = useState([])

    const handleChange = (event) => {
        setNumColumns(event.target.value);
      };

    const createColumns = (numColumns) => {
        const newColumns = [];
        const newStacks = [];
        for(let i = 0; i < numColumns-2; i++) {
            newColumns.push(<Column         currentColor={currColor}/>)
            newStacks.push([])
        }
        for(let i = 0; i < 2; i++) {
            newColumns.push(<EmptyColumn />)
            newStacks.push([])
        }
        setColumns(newColumns)
        setStacks(newStacks)
        console.log(newStacks)
    }

    const createColors = (numColumns) => {
        const colorsChosen = [];
        for(let i = 0; i < numColumns-2; i++) {
            colorsChosen.push(colors[i])
        }
        setColorsShown(colorsChosen)
    }
    useEffect(() => {
        createColumns(numColumns);
        createColors(numColumns);
    }, [currColor, numColumns])
    
    return (
        <div>
            <div>
                <label>
                    Number of columns:
                    <input value={numColumns} onChange={handleChange}></input>
                </label>
            </div>  
            {colorsShown.map((color)=> {
                return (
                    <Colors color={color} setCurrColor={setCurrColor}/>
                )
            })}
            <p>current color:</p>
            <div id="currentColor" style={{backgroundColor: currColor}}></div> 
            <div id="stacks">
                {columns}
            </div>
            <button>Run</button>
        </div>
    );
}
 
export default Home;