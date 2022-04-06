import React, {Component} from 'react'

class ErrorBoundary extends Component{

    constructor(props){
        super(props)

        this.state = {
            hasError: false
        }

    }

    /*componentDidMount() {
        console.log("El componente se ha montado")
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("Estado previo:", prevState.activo)
        console.log("Estado nuevo:", this.state.activo)
        console.log("El componente se ha actualizado")
    }
    
    componentWillUnmount() {
        console.log("El componente se ha desmontado")
    }*/
    //Lo mismo que setState({ hasError: true})
    static getDerivedStateFromError(error){
        return { hasError: true}
    }
    
    componentDidCatch(error, errorInfo) {
        console.log("Error info:", errorInfo)
    }
    

    render(){
        return (
            this.state.hasError ? <h1>Hubo un error </h1> : this.props.children 
        )
    }

}

export default ErrorBoundary
