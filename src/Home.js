import { useState } from "react"

const Home = () => {
    // let name='Mario'
   const [name,setName]= useState('Mario')
   const [age,setAge]=useState(25);
    const handleClick=(e) => {
        // name='Mohith'
        // console.log(name)
        setName('Mohith')
        setAge(27)
    }
    const handleClickMeagain=(name,e) => {
        console.log('Hello  again ' + name, e.target);
    }
    return ( 
        <div className="Home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            

        </div>
     );
}
 
export default Home;