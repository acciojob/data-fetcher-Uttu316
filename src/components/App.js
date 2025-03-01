
import React from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData] = useState(null)

  const getData = async ()=>{
  const res =  await fetch('https://dummyjson.com/products')
  const resData = await res.json();
    setData(resData)
  }
  useEffect(()=>{
      getData()
},[])
  return (
    <div>
    {!data && <p>Loading...</p>}
  {!!data&&
    <>
       <h1>Data Fetched from API</h1>
   <pre>
       {JSON.stringify(data)}
  </pre>
    </>
  }
    </div>
  )
}

export default App
