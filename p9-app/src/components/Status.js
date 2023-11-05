import "./Status.css"


export default function StatusBoxes () {
    return ( 
        <div className='status'>
            <div className='doorStatus'>
                <h2> DOOR STATUS</h2>
                <div className='doorLine'></div>
                <h2> UNLOCKED </h2>
            </div>
            <div className='laserStatus'>
                <h2> LASER STATUS</h2>
                <div className='laserLine'></div>
                <h2 className='ready'> NOT READY</h2>
            </div>
        </div>
     )
  }