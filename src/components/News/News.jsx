import React, { useState} from 'react';
import s from './News.module.css';

const News = () => {
    const [count, setCount] = useState(0)

    return (
        <div className={s.clicker}>
            <h2>Clicker</h2>
            <p> You clicked {count} times </p>
            <button onClick={ () => setCount (count-1) } className={s.clickButton}> Click - 1 </button>
            <button onClick={ () => setCount (0) } className={s.clickButton}> Reset </button>
            <button onClick={ () => setCount (count+1) } className={s.clickButton}> Click + 1 </button>
        </div>
    )
}

export default News;