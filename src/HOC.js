import React from 'react'

const HOC=(Component)=> {
  return (

    class extends React.Component {
        state={
            auth:false
        }
        render(){
    
            return(
                <div>
                   {this.state.auth ?<Component name="raj"/>: <h2>please login</h2>}
                </div>
            )
        }
    }
  )
}

export default HOC