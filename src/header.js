function Header(props) {
    return(
        <div style={{width:1450,backgroundColor:"blue",height:100,color:"white"}}>
            <h1>React</h1>
            <p>Website made by {props.data}</p>


        </div>
    )
    
}
export default Header;