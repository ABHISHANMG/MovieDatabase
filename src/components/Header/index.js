import React from 'react'

export const Header = (props) => { 
    

    const {searchInput} = props  

    const inputVal = (event) => {
        searchInput(event.target.value)
    }

  return ( 
    <nav class="navbar bg-dark border-bottom border-body navbar-expand-lg d-flex flex-row justify-content-space-between">
  <div class="container-fluid">
    <h1 className='text-white bg-dark'>MovieDB</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={inputVal}/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
