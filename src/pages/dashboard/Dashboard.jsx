import React,{useState} from 'react'
import './dashboard.css'
import SearchPlaceholder from 'components/searchPlaceholder/SearchPlaceholder'
import SearchBar from 'components/searchBar/Search'
import Stepper from 'components/stepper'


const Dashboard = () => {

    return (
        <div className="container">
         <h1 class="title">Confirm and Submit form BA</h1>
         {/* <SearchBar/>
         <SearchPlaceholder/> */}
         <Stepper/>

        </div>
   
    )
}

export default Dashboard
