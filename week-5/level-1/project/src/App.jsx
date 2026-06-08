

function App() {
  
  return (
    <>
      <Card name ="Arsh Attri" bio="I am a 100xDev" interest="Coding, PS5 Gaming, watch Netflix sometime"/>
    </>
  )
}
function Card(props){
  return(
    <>
    <h2>{props.name}</h2> <br></br>
    <h3>{props.bio}</h3> <br></br>
    <h4>{props.interest}</h4> <br></br>
    <button>Linkdln</button>
    <button>Twitter</button>
    </>
  )
}

export default App
