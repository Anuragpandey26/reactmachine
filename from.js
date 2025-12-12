import { useState } from "react";
export default function FromApp(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [gender,setGender]=useState('')
    const handleSubmit=()=>{
         if(!name){
            alert("the name is required")
         }
         if(!email){
            alert("the name is required")
         }
         if(!gender){
            alert("the name is required")
         }
         alert(`from submitted ${name} ${email} ${gender}`)
         setName('')
         setEmail('')
         setGender('')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> name:</label>
                <input
                 type='text'
                  value={name}
                 placeholder="enter the name"
                 onChange={(e)=>setName(e.target.value)}
                />
                <br></br>
                <label> email:</label>
                <input
                 type='email'
                  value={email}
                 placeholder="enter the email"
                 onChange={(e)=>setEmail(e.target.value)}
                />
                <br></br>
                <div>
                <label>gender:</label>
                <input
                 type='radio'
                 name ='male'
                 value='male'
                 checked={gender==='male'}
                 placeholder="enter the gender"
                 onChange={(e)=>setGender(e.target.value)}
                />Male
                <input
                 type='radio'
                  name='female'
                  value='female'
                 checked={gender==='female'}
                 placeholder="enter the gender"
                 onChange={(e)=>setGender(e.target.value)}
                />Female
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};