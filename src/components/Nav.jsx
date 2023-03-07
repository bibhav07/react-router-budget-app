import React from 'react'
import { Form, Link, NavLink } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/solid'


import logomark from "../assets/logomark.svg";

const Nav = ({userName}) => {
  return (
    <nav>
        
    <NavLink to="/" ar-aria-label='Go to home' >
        <img  src={logomark} height={30}   alt="" />
        <span>HomeBudget</span>
    </NavLink>


    {

        userName && (
            <Form  
            method='post'  
            action='/logout' 
            onSubmit={ (event)  => {
                if(!confirm("Delete user and all data?")
                    ){
                        event.preventDefault();
                }
            }  }
            
            >
                   <button type='submit' className='btn btn--warning' >
                        <span>Delete User</span>
                        <TrashIcon width={20} />
                   </button>

            </Form>
        )

    }




    </nav>
  )
}

export default Nav