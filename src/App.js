import React from "react"
import "./index.css"
// const App = () => {

//     let [newTime, setNewTime] = React.useState(new Date().toLocaleTimeString()); 
//     const upDateTime = () => {
//         newTime = new Date().toLocaleTimeString();
//         setNewTime(newTime);
//     }
//     setInterval(upDateTime,1000)

//     return ( 
//         <>
//         <h1> {newTime}</h1>
//         </>
//     );
// };
export default function App() {

    const [formData, setFormData] = React.useState(
        {
        email: "",
        password : "",
        cPassword : "",
        check : true,
        submit : ""
        })
        function handleChange(event){
            const {name, value, type, checked} = event.target
            setFormData(prevFormData => ({
                ...prevFormData, [name]: type === "checkedbox" ? checked : value
            }) )
        }
        function handleSubmint(event){
            event.preventDefault()
            if (formData.password === formData.cPassword) {
                alert("Successfully Sign up")
            }else {
                alert("Passwords do not match")
                return
            }
            if (formData.check){
                alert("Thanks for signing up our Newslatter")
            }
        }
return (
    <div className="form-container">
    <form onSubmit={handleSubmint} className="form">
        <input
        type="email"
        placeholder="Enter Email" 
        name="email"
        className="form-input"
        value={formData.email}
        onChange={handleChange}
        />
        <br/>
        <br/>
        <input
        type="password"
        placeholder="Password" 
        name="password"
        className="form-input"
        value={formData.password}
        onChange={handleChange}
        />
         <br/>
        <br/>
        <input
        type="password"
        placeholder="Confrim Password" 
        name="cPassword"
        className="form-input"
        value={formData.cPassword}
        onChange={handleChange}
        />
        <br/>
        <br/>
        <input
        type="checkbox"
        name="check"
        checked={formData.check}
        onChange={handleChange}
        />
        <label>I want to join the newsletter</label>
        <br/>
        <br/>
        <button    type="submit"
        name="submit"
        value={formData.submit} className="form-submit">Sign up</button>
    </form>
    </div>
)
}


