import React from 'react'
import { useEffect } from 'react';

const Dropdown = ({ onChange = ()=> {}}) => {


    useEffect(() => {
        const dropdown_items = document.querySelector(".dropdown .dropdown-content").childNodes;
        dropdown_items.forEach((e)=>{
            e.addEventListener("click", ()=>{
                document.querySelector(".dropdown>span").innerHTML = e.textContent;
                const value = e.getAttribute("value");
                document.querySelector(".dropdown>span").setAttribute("value", value);
                onChange(value);
            })
        })
    }, [onChange])

    return (
        <div className="dropdown">
            <span value="">Select Role</span>
            <div className="dropdown-content">
                <span value="teacher">Teacher</span>
                <span value="student">Student</span>
            </div>
        </div>
    )
}

export default Dropdown