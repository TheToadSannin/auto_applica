import React from 'react'

const CreateApplication = () => {
  return (
    <main className='applicationMain'>
      <div className='cards'>
        <AppCard />
      </div>
    </main>
  )
}

const AppCard = () => {
  return (
    <div className='card'>
      <div>
        <img src="https://picsum.photos/300/300" alt="asdfasdf" />
      </div>
      <div className='title-div'>
        <h1>Title</h1>
        <div className='content'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim praesentium eveniet tenetur nesciunt officiis eius id, repudiandae soluta cupiditate nemo!</p>
        </div>
      </div>
    </div>
  )
}

export default CreateApplication