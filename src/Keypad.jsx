//Component to render a button for the calculator.
function Keyswitch ({number}){
    return(
        <a className="button">{number}</a>
    )
  }
  
export default function Keypad (){
    return(
      <>
        <div>
        <Keyswitch number="1"/>
        <Keyswitch number="2"/>
        <Keyswitch number="3"/>
        <br/>
        <Keyswitch number="4"/>
        <Keyswitch number="5"/>
        <Keyswitch number="6"/>
        <br/>
        <Keyswitch number="7"/>
        <Keyswitch number="8"/>
        <Keyswitch number="9"/>
        </div>
      </>
    )
  }