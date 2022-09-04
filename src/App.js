import logo from './logo.svg';
import { header_data , courses_data } from './Constants/db';
import './styles/App.css';
import Container from "./Components/container";
import Cards from "./Components/cards";
function App() {
  return (
    <div className="App">
      <Container data={header_data}/>
      <Cards data={courses_data}/>
    </div>
  );
}
export default App;
