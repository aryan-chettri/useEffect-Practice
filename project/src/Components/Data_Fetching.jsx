import React, {useState, useEffect} from "react"

const Data_Fetching = ({userId}) => {

    const [posts, setPosts] = useState([]);
    const [inputUserId, setInputUserId]= useState(0);

    useEffect(()=>{
        const fetchData = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

            console.log(response)
            const data = await response.json();
            setPosts(data);
            console.log(data);
            
        };
        fetchData();
    }, [userId]);

    const setInputUserIdfunction = (e) =>{
        setInputUserId(Number(e.target.value));
        
    }

    const setUserId = () =>{
        console.log(inputUserId);
    }

  return (
    <div>

        <input type="text" value={inputUserId} onChange={setInputUserIdfunction}/>
        <button onClick={setUserId}>Click me</button>
        {
            posts.map((post)=>(
                <div key={post.id}>
                    <h4>{post.id}</h4>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Data_Fetching
