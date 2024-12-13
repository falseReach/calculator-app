
import Keypad from './Keypad'
import RenderCharacter from './LCDScreen'

export default function App() {
  return (
    
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <div>
        <RenderCharacter char={'A'}/>
        <RenderCharacter char={'B'}/>

        
        <Keypad />
      </div>
    </div>

    


  )
}