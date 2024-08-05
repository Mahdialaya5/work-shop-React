
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './components/PlayersList';


function App() {

const handleclick=(e)=>{
    console.log("hello");
  e.preventDefault()
}
 
  return (
    <div className="App"  >
      <form   onSubmit={handleclick}  >

      <input  onChange={(e)=>e.target.value}    />

      <button  >ok</button>
      </form>
       <PlayersList/>
    </div>
   
  );
}

export default App;
