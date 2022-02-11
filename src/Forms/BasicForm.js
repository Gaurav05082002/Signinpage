import React from 'react';
import { useState } from 'react';
import "./BasicForm.css";

const BasicForm = () => {
const [email,setemail] = useState(""); 
const [password,setpassword] = useState(""); 
const [allentry, setallentry] = useState([]);

const submitForm = (e) => {
    e.preventDefault();
    const newentry = { email: email, password: password};
    setallentry([...allentry ,newentry]);
    
}
  return (
   <div className="fullbody">
       <div className="formbody">
         <h1 style={{color:"white"}} >LOGIN FORM</h1>
 <form action='' onSubmit={submitForm}>
        <div className="forminput" >
            <label for="email"  style={{padding:"5px" ,fontsize:"large"}} >Login id </label>
            <input   id="email"  value={email} autoComplete="off"
            onChange={(e) => setemail(e.target.value)}
            ></input>
           
        </div>

       

        <div className="forminput" >  
            <label for="password" style={{padding:"5px"}} >Password </label>
            <input type="text"  id="password"  value={password} autoComplete="off"
             onChange={(e) => setpassword(e.target.value)}
             ></input>
           
        </div>

        <button style={{padding:"5px"}} type="submit">Login</button>
</form>
<h1></h1>
</div>

<div className="formbody">
<h1 style={{color:"white"}} >Signed in people</h1>

{
    allentry.map((curlElem)=>{
         return (
             <div>
                 <div> emial id : {curlElem.email}</div>
                 <div>password :{curlElem.password}</div>
                 <h1></h1>
             </div>
         )

    })
}

</div>



   </div>
  )
}

export default BasicForm