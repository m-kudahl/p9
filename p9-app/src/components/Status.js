import "./Status.css"


export default function StatusBoxes () {
    return ( 
        <div className='Status'>
            <div className='DoorStatus'>
                <h2> DOOR STATUS</h2>
                <div className='DoorLine'></div>
                <h2> UNLOCKED </h2>
            </div>
            <div className='LaserStatus'>
                <h2> LASER STATUS</h2>
                <div className='LaserLine'></div>
                <h2 className='Ready'> NOT READY</h2>
            </div>
        </div>
     )
  }