const Card=(props)=>{
    console.log(props.meaning.length);
    return(
        <>
        <div style={{width:"45rem", margin:"auto",border:"3px solid plum",marginTop:"0.2rem",padding:"0.5rem"}}>
          <span>👉 {props.meaning}</span> 
        </div>
        </>
    )
}
export default Card;