import React from 'react'

const Applications = () => {

    const handleStoreApplication = async (e)=>{
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/storeApplicationTemp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const json = await response.json();
        console.log(json);
    };


  return (
    <div>
        <form onSubmit={handleStoreApplication}>
            <button type="submit">Send</button>

        </form>
    </div>
  )
}

export default Applications