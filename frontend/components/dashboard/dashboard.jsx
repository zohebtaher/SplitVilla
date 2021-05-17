import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render (){
        return (
            <div className='dashboard-container'>
                <section className="left-side-nav">
                    <h1><Link to='/dashboard'>Dashboard</Link></h1>
                </section>

            </div>
        )
    }
}