import { useState} from 'react';
import Card from './Card';
import Home from './Home';
const Main=()=>{
    const[word,setword]=useState("");
    const[mydata,setMyData]=useState([]);
    const[fetching,setfetchData]=useState([]);
    async function getData()
    {
        try{
            console.log(word);
    let data=  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
       let jsonData=await data.json();
        setMyData(jsonData);
       console.log(mydata[0].meanings[0].definitions[0].definition);
       let x=mydata[0].meanings[0].definitions[0].definition;
       console.log(x.length);
       setfetchData(mydata[0].meanings[0].definitions);
      
        }
        catch(err)
        {
            console.log("error msg"+err);
        }
    }
  function handleSubmit(e)
  {
     console.log(word);
     getData();
    
  }
    function WordChange(e)
  {
    setword(e.target.value);
    setfetchData("");
  }
    return(
        <>
        <div style={{display:"flex",gap:"2rem",margin:"auto",width:"32rem",marginTop:"4rem"}}>
      <input type='text' placeholder='Start typing any word.' onChange={(e)=>WordChange(e)}
       style={{height:"4rem",width:"25rem", borderTopLeftRadius:"12rem ",paddingLeft:"42px",backgroundColor:"white"}}/>
       <button className='button' 
        onClick={handleSubmit}>Search</button>
       </div>
       {
          fetching.length<=0?<Home/>:(
            <section className="contents" style={{marginTop:"2rem"}}>
            {fetching.map(item => (
            //   <span>{item.definition}</span>
            
              <Card meaning={item.definition}/>
            ))}
          </section>
          )
       }
        </>
    )
}
export default Main;
