import './App.css'
//import BoxColor from './components/BoxColor'
import RandomBoxColor from './components/RandomBoxColor'


function App() {
  

  return (
    <div className='App'> 
    
        <RandomBoxColor> 
        esta caixa é fixe
        </RandomBoxColor>
       
        <RandomBoxColor> 
        esta caixa é max
        </RandomBoxColor>

       <RandomBoxColor> 
        esta caixa é Brutal
        </RandomBoxColor>

      </div>
  
  )
}

export default App
