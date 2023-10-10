import img from './study.jpg'
const Home=()=>{
    return(
        <>
         <div style={{display:"flex",flexWrap:"wrap",gap:"8rem",margin:"auto",marginTop:"4rem"}}>
            <div className='animation-container' style={{display:"flex",justifyContent:"flex-end",width:"30rem" }}>
             <div className='word'> 
              <h1 style={{textAlign:"center",fontFamily:"cursive",fontWeight:"bolder",fontStyle:"italic"}}>
                Welcome to<span style={{color:"red"}}> Dictionary</span></h1>
             </div> 
            </div>
            
            <div style={{display:"flex",justifyContent:"flex-end",marginLeft:"6rem"}}>
                <img src={img} alt='not found'/>
            </div>
         </div>
         
        
        </>
    )
}
export default Home;