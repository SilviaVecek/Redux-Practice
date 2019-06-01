import React, { useState } from 'react'; 
import { connect } from 'react-redux';

const Helloworld = ({ name, changeName }) => {
    // const [name, setName] = useState("")

    // function nameChange(e) {
    //     setName(e.target.value)
    // }
    return (
        <>  
            <div className="text">Hi, {name}!</div>
            <div>Name: <input type="text" onChange={changeName} value={name}/></div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

//code below is same as above just different syntax

// const mapStateToProps = (state) => ({
//     name: state
// })

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (e) => dispatch( {type: "CHANGE_INPUT", value: e.target.value} )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Helloworld);

//uncontrolled and controlled components