import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function sidebar() {
 const recentItem = (topic) =>(
    <div className='sidebar__recentItems'>
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
 )
 
    return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1613828330596-982c62f72e9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt=""/>
            <Avatar className='sidebar__avatar'/>
            <h2>Mamta Bhatt</h2>
            <h4>mamtabhatt6043@gmail.com</h4>
        </div>
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
            <p>Who viewed you?</p>
            <p className='sidebar__statNumber'>
                500
            </p>
            </div>
            <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>
                800
            </p>
                </div>
        </div>
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('nodejs')}
            {recentItem('data analyst')}
            {recentItem('web developer')}
            {recentItem('designer')}
        </div>
    </div>
  )
}

export default sidebar
