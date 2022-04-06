import React from 'react'
import PropTypes from 'prop-types'
import useVanta from './../../hooks/useVanta'

const WelcomeScreen = ({ children }) => {

    const { myUseRef } = useVanta()
    
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
