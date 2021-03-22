import React from 'react';
import styles from './Stats.module.css'

const Statistic = (props) => {
    // debugger
    return (
        <div>
            <section className="statistics">
                <h2 className="title">Upload stats</h2>

                <ul className="stat-list">
                    {
                        props.statistic.map(stat => {
                            return (
                                <li key={stat.id} className="item">
                                    <span className="label">{stat.label}</span>
                                    <span className="percentage">{stat.percentage}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </div>
    )
}
export default Statistic;