import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'


const WelcomeScreen = ({ children }) => {

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

    return (
        <div className="full" ref={myUseRef}>
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {

    children: PropTypes.node
}

export default WelcomeScreen
