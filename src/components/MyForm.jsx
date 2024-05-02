import React, { useRef, useState } from 'react'

const MyForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const contactRef = useRef(null)

    const [users,setUsers] = useState([])

    const handleData = () => {
        const fullname = nameRef.current.value
        const mail = emailRef.current.value
        const yourcontact = contactRef.current.value

        setUsers([...users,{name : fullname, email : mail, contact : yourcontact}])

        nameRef.current.value = ''
        emailRef.current.value=''
        contactRef.current.value=''
    }
  return (
    <div>
        <div className='bg-dark w-75 mx-auto rounded-3 p-5'>
            <h3 className='text-light'>Add Your Details</h3>
            <input type='text' placeholder='Enter Your Name' className='form-control mb-3'
            ref={nameRef}/>


            <input type="email" placeholder='Enter Your Email' className='form-control mb-3'
            ref={emailRef}/>


            <input type='tel' placeholder='Enter Your Contact' className='form-control mb-3
            ' ref={contactRef}/>

            <button className='btn btn-primary me-3' onClick={()=>nameRef.current.focus()}>Name</button>
            <button className='btn btn-warning me-3' onClick={()=>emailRef.current.focus()}>Email</button>
            <button className='btn btn-light me-3' onClick={()=>contactRef.current.focus()}>Contact</button>

            <button className='btn btn-success' onClick={handleData}>Submit</button>
        </div>
        <br/>
        <div className='w-75 bg-dark mx-auto p-3 rounded-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u)=>{
                            return(
                                <tr>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.contact}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MyForm