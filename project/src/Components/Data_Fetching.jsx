import React, {useState, useEffect} from "react"

const Data_Fetching = ({userId}) => {

    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('This is an useEffect Function');
        setPosts([...posts, count])
    }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <ul>{posts}</ul>
    </div>
  )
}

export default Data_Fetching
