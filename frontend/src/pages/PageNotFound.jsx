import React from 'react'

function PageNotFound() {

  document.getElementsByTagName("title")[0].text = "Page Not Found";

  return (
    <div className='error404page'>
      <p>
        Page Not Found 
        <span>404</span>
      </p>
    </div>
  )
}

export default PageNotFound