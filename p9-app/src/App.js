
import TimeLeft from './TimeLeft';
import TimeEstimated from './TimeEstimated';
import Alertbox from './Alertbox';

function App() {

const Mybutton = ({ top, background, children}) =>{ 
  const MyButton = { 
    position: "absolute",
    width: "241px",
    height: "150px", 
    left: "39px",
    top: top,
    border: "1px solid #000000", 
    background: background, 


};

return <button style={MyButton}>{children}</button>;

};

return (
  <>
    <Mybutton top="16px" background="#62BE59" > Start</Mybutton>
    <Mybutton top="180px" background="#DB1414" > Stop</Mybutton>
    <Mybutton top="345px" background="#FFFFFF" > Reset</Mybutton>
    <Mybutton top="510px" background="#EEEEEE" > Pause </Mybutton>


    <TimeLeft />
    <TimeEstimated />
    <Alertbox />
    
  
  </>
);
};


export default App;
