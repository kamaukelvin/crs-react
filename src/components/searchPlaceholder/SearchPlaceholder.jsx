import React from 'react'
import folder from 'assets/images/Group.png'
import './searchPlaceholder.css'

const SearchPlaceholder = () => {
    return (
        <div className="card">
            <div className="card-header bg__secondary text-uppercase">
                search record
            </div>
            <div className="row card-body">
              <div class="col-md-3 d-flex flex-wrap justify-content-center align-items-center">
              <img src={folder} width="150" height="150" alt=""/>
              </div>
              <div class="col-md-9">
               <p>You can search a record by: </p>
               <ul class="placeholder__list">
                 <li>ABN Serial Number</li>
                 <li>Name of the child (first name, middle name, surname)</li>
                 <li>Date of Birth</li>
                 <li>Name of the mother (first name, middle name, surname)</li>
                 <li>Name of the father (first name, middle name, surname)</li>
                 <li>District of birth</li>
                 </ul>
              </div>
            </div>
        </div>
    )
}

export default SearchPlaceholder
