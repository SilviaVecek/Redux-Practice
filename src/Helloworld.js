import React, { useState } from 'react'; 
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Form = ({ name, age, isSingle, city, job, updateProfile }) => {
    // const [name, setName] = useState("")

    // function nameChange(e) {
    //     setName(e.target.value)
    // }
    return (
        <>  
            <div className="form"> 
                <div>Name: <input type="text"  value={name} onChange={updateProfile("name")}/></div>
                <div>Age: <input type="number" value={age} min="18" max="99" onChange={updateProfile("age")}/></div>
                <div>Single: 
                False <input type="radio"  name="single" value="False" checked onChange={updateProfile("isSingle")}/> 
                True <input type="radio"  name="single" value="True" onChange={updateProfile("isSingle")}/> 
                </div>
                <div>City: <input type="text"  value={city} onChange={updateProfile("city")}/></div>
                <div>Job Industry: 
                    <select onChange={updateProfile("job")}>
                        <option value="IT">IT</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Business">Business</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Construction">Construction</option>
                        <option value="Design">Design</option>
                        <option value="Science">Science</option>
                        <option value="Education">Education</option>
                    </select>
                </div>
                <NavLink to="/form">Submit</NavLink>
            </div>
        </>
    )
}

export const DisplayForm = ( {name, age, isSingle, city, job }) => {
    return (
        <>
        <div className="text">Hi, <span className="data">{name}</span> <br/>You are <span className="data">{age}</span> <br/>Are you single? <span className="data">{isSingle}</span><br/>You're currently based in <span className="data">{city}</span><br/>You work in the <span className="data">{job}</span> sector!</div>
        <NavLink to="/">Go Back</NavLink>
        </>
    )
}

export const Error = () => {
    return (
        <div>
            Error!
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        age: state.age,
        isSingle: state.isSingle,
        city: state.city,
        job: state.job
    }
}

//code below is same as above just different syntax

// const mapStateToProps = (state) => ({
//     name: state
// })

const mapDispatchToProps = (dispatch) => {
    return {
        // changeName: (e) => dispatch( {type: "CHANGE_INPUT", value: e.target.value} ),
        updateProfile: field => (e) => dispatch( {type: "CHANGE_INPUT", value: e.target.value, field: field} )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
export const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(DisplayForm);

//uncontrolled and controlled components