import React from 'react'

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#students">Students</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#courses">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4 text-center">
        <h1 className='text-white'>Welcome to the Student Management System</h1>
        <p className='text-white'>This is the home page of the student management system. Use the navigation bar to explore different sections.</p>
      </div>
    </>
  )
}

export default Home