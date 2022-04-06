import { useRef, useEffect, useState } from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () => {


    const myUseRef = useRef(null)
    const [vanta, setVanta] = useState(0)
    
    useEffect(() => {
    
        //solo pasa una vez
        if(!vanta){
            setVanta(Clouds({
                THREE,
                el:myUseRef.current
            }))
        }
    
        return () =>{
    
            if(vanta){
                vanta.destroy()
                //console.log('libero recursos para que no se ejecute en background')
            }
    
        }
    
    }, [vanta]) //aseguro que funciona bien

    return { myUseRef }

}

export default useVanta