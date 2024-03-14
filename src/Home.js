const Home = () => {
    const handleClick=(e) => {
        console.log('Hello Ninjas',e);
    }
    const handleClickMeagain=(name,e) => {
        console.log('Hello  again ' + name, e.target);
    }
    return ( 
        <div className="Home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>{
               handleClickMeagain('Mohith',e)
            }}>Click Me again</button>

        </div>
     );
}
 
export default Home;