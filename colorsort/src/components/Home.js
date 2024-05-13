import { useState, useEffect } from 'react';
import Colors from './Colors'
import Column from './Column'
import EmptyColumn from './EmptyColumn'
import './Home.css'
import axios from 'axios'
import Solution from './Solution'



const Home = () => {
    const [numColumns, setNumColumns] = useState(0)
    const [columns, setColumns] = useState([])
    const colors=["Blue", "Red", "Green", "Pink", "Yellow", "Orange", "Purple", "Gray", "Aquamarine", "Brown", "SkyBlue", "HotPink"]
    const [colorsShown, setColorsShown] = useState([])
    const [currColor, setCurrColor] = useState("")
    const [stacks, setStacks] = useState([])
    const [solution, setSolution] = useState([])

    const handleChange = (event) => {
        setNumColumns(event.target.value);
        console.log(stacks)
      };
    
    const getSolution = () => {
        axios.post('https://b0pt945eyk.execute-api.us-west-1.amazonaws.com/dev/api/v2/runAlgorithm',{"stacks":stacks,"num_stacks":parseInt(numColumns)}).then(response => {
            setSolution(response.data.solutiion.Solution)
        })
    }

    const createColumns = (numColumns) => {
        const newColumns = [];
        const newStacks=[...stacks]
        while (newStacks.length < numColumns-2) {
            newStacks.push(['','','',''])
        }
        while (numColumns-2 > newStacks.length) {
            newStacks.pop()
        }
        setStacks(newStacks)
        for(let i = 0; i < numColumns-2; i++) {
            newColumns.push(<Column index={i} currentColor={currColor} stacks={stacks}/>)
        }
        for(let i = 0; i < 2; i++) {
            newColumns.push(<EmptyColumn index={i + numColumns -2} stacks={stacks}/>)
        }
        setColumns(newColumns)
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
            <button onClick={()=>getSolution()}>Run</button>
            <Solution solution={solution} />
        </div>
    );
}
 
export default Home;