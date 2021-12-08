/* eslint-disable max-len */
// import React, { Component } from 'react'
// import { auth } from '../../../firebase'
// import './login.css';

// class Login extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       email: '',
//       password: ''
//     }
//   }

//   handleChange = e => {
//     const { name, value } = e.target
//     this.setState({
//       [name]: value
//     })
//   }

//   handleSubmit = e => {
//     e.preventDefault()

//     auth
//       .signInWithEmailAndPassword(this.state.email, this.state.password)
//       .then(user => {})
//       .catch(err => {
//         alert(err.message)
//       })
//   }

//   //   Register = e => {
//   //     e.preventDefault()
//   //   }

//   render () {
//     return (
//       <div className="login-control">
//         <h3>Welcome to Web<sub>s</sub>hine</h3>
//         <img src="https://t3.ftcdn.net/jpg/02/20/14/38/360_F_220143804_fc4xRygvJ8bn8JPQumtHJieDN4ORNyjs.jpg" alt="no" />
//         <div className='container login-main'>
//           <form onSubmit={this.handleSubmit} autoComplete='off'>
//             <div className='form-group mb-3'>
//               <label for='exampleInputEmail1' class='form-label'>
//                 Email address
//               </label>
//               <input
//                 type='email'
//                 name='email'
//                 className='form-control'
//                 placeholder='Email Addresss'
//                 onChange={this.handleChange}
//               />
//             </div>
//             <div className='form-group mb-3'>
//               <label for='exampleInputEmail1' class='form-label'>
//                 Password
//               </label>
//               <input
//                 type='password'
//                 name='password'
//                 className='form-control'
//                 placeholder='Password'
//                 onChange={this.handleChange}
//               />
//             </div>
//             <button type='submit' className='btn btn-primary'>
//               Login
//             </button>
//             {/* <button
//               onClick={this.Register}
//               type='button'
//               className='btn btn-danger'
//             >
//               SignUp
//             </button> */}
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default Login
