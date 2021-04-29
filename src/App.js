import logo from './logo.svg';
import './App.css';
import  Gallery  from './Gallery/Gallery'
import AuthorizationForm from './Authorisation/Authorisation'
function App() {
  return (
    <div className="App">    
    <AuthorizationForm/>
    <Gallery/>
      
    </div>
  );
}

export default App;
