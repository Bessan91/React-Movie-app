import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Regiester() {
  // let formik= useFormik({
  //   email :"",
  //   name : "",
  //   password:"",
  //   ConfirmPassword:"",
  //   onSubmit:register


  // });
  let formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      cPassword: "",
    },
    onSubmit: register,
  });
//  async function  register (values){ 
//     let {data}= await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup',values);
//     console.log(data);
//   }
async function register(values) {
  let { data } = await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup', values);
  console.log(data);
}
  return (
  <>
  {/* 
  
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName"  name='name' value={formik.values.name}
    onChange={formik.handleChange}
    />
  </div>
  
  
 
 
</form>
</div> */}

<section className="vh-100">
  <div className="container-fluid h-custom mt-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="/assets/login.png" className="img-fluid" alt="Sample image" />
      </div>
      <div className="col-md-7 mb-3">
        <form className='w-50 m-auto text-center' onSubmit={formik.handleSubmit}
         value={formik.values.email}
         onChange={formik.handleChange} 
         > 
         
          <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' 
     value={formik.values.email}
     onChange={formik.handleChange} />
  </div>
          <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName"  name='name' value={formik.values.name}
    onChange={formik.handleChange}
    />
    </div>
         
          <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' 
    value={formik.values.password} 
    onChange={formik.handleChange}/>
  </div>
          <div className="mb-3">
    <label htmlFor="exampleInputPassword2" className="form-label"> Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword2" name='cPassword' 
    value={formik.values.cPassword} 
    onChange={formik.handleChange}/>
  </div>
         
          <div className="text-center text-lg-start mt-4 pt-2 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">Submit</button>
       
          </div>
        </form>
      </div>
    </div>
  </div>
 
</section>
  </>
  )
}
