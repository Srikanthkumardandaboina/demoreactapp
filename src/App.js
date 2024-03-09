// import Reat from "react";
// import Test from "./Test";

// class App extends Reat.Component{
//   state={
//     name: 'jhon',
//     age : 60
//   }
//   render(){

//   return(
//     <div>
//       <center>
        
//          <Test name={this.state.name} age={this.state.age} />
        
//       </center>
//     </div>
//   )
// }
// }
// export default App;

// import React,{useState} from 'react'


// export const App = () => {
//   const[data,setdata]=useState({
//     email:'',
//     password:''

//   })
//  const changeHandler= e =>{
//   setdata({...data,[e.target.name]:e.target.value})
//  }
//  const submitHandler= e=>{
//   e.preventDefault();
//   console.log(data);
//  }
//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler}>
          
//         <label>Email</label> <br/>
       
//        <input type='email' name='email' onChange={changeHandler}/> <br/>
//        <label>password</label> <br/>
//        <input type='password' name='password' onChange={changeHandler}/> <br/>
//        <input type='submit' value={'login'}/>
//         </form>
       

//       </center>
//     </div>
//   )
// }
// export default App;

// import React from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Home from './Home'
// import Dashboard from './Dashboard'
// import About from './About'
// import Pagenotfound from './Pagenotfound'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//        <Routes>
//          <Route path='/' element={<Home />} />
//          <Route path='/dashboard' element={<Dashboard />} /> 
//          <Route path='/about' element={<About />} />
//          <Route path='*' element={<Pagenotfound />} />
//        </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import HOC from './HOC';

// const App=(props)=> {
//   return (
//     <h1>welcome user{props.name}</h1>
//   )
// }

// export default HOC(App);


// import React, { useEffect } from 'react'
// import { json } from 'react-router-dom'

// const App=()=> {

//   useEffect(()=>{

//   fetch().then(response =>response.json().then(json=> console.log(json.iteams))
//   )
//   },[])
//   return (
//     <div>App</div>
//   )
// }

// export default App


// import React,{useState} from 'react'



// const App=()=> {
//   const [data, setData]=useState({
//     name:'',
//     age:''
//   })
//   const constantHandler=e=>{
//     setData({...data,[e.target.name]:e.target.value})
//   }
//   const submitHandler=e=>{
//     e.preventDefault();
//     fetch('https://test-api-46a8b-default-rtdb.firebaseio.com/data.json',
//     {
//       method:'POST',
//       body:JSON.stringify(data),
//       headers:{
//         "Content-Type": "application/json; charset=UTF-8"
//       }
//     }
//     )
    
//     .then(response=>alert('data submited')).catch(err=>console.log(err))  }
//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler}>
//           <label>Name</label><br/>
//           <input type='text' name='name' onChange={constantHandler} /><br/>
//           <label>Age</label><br/>
//           <input type='text' name='age' onChange={constantHandler}/><br/>
//           <input type='submit' name='posting data' />
//         </form> 
//       </center>
//     </div>
//   )
// }

// export default App

// import React,{createContext,useState} from 'react'
// import ComponentA from './ComponentA'
// import ComponentB from './ComponentB'

// export const store=createContext();

// const App = () => {
//   const[data,setData]=useState(0);
//   return (
//     <store.Provider value={[data,setData]}>
//       <center>
//        <ComponentA />
//        <ComponentB />
//        <button onClick={()=>setData(data+1)}>Increment</button>
//       </center>
//     </store.Provider>
    
  
//   )
// }

// export default App


import React, { useState } from 'react'


const App=()=>{
  const[data,setData]=useState({
    name:'',
    email:'',
    password:'',
    confirmpassword:''
  
  });
  
  let students= ["raj","rani","kapil","kuldeep",10,20,30]
  let stud=students.splice(3,1,"hello")
  document.write(stud)
  console.log(stud)

    const changeHandler=e=>{
      setData({...data,[e.target.name]:e.target.value})
     
    };
   
    const submitHandler=e=>{
      e.preventDefault();
      console.log(data)
      
      if(data.password===data.confirmpassword){
        alert('login successfully');
      } else{
      alert('somthing went wrong');
      }
  };
 
   
    return (
      <div>
        
        <center>
        <form onSubmit={submitHandler}>
          <label>Name</label>
          <input type='text' placeholder='name' name='name'  onChange={changeHandler}></input><br></br><br></br>
          <label>Email</label>
          <input type='text' placeholder='email' name='email' onChange={changeHandler}></input><br></br><br></br>
          <label>password</label>
          <input type='text' placeholder='password' name='password' onChange={changeHandler}></input><br></br><br></br>
          <label>confirmpassword</label>
          <input type='text' placeholder='confirmpassword' name='confirmpassword' onChange={changeHandler}></input><br></br><br></br>
          <button>submit</button>
        </form>
        </center>
        
      </div>
    );
  };


export default App;


