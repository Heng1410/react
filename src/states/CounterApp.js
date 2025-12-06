import React, { useState } from 'react';

function CounterApp() {
    const [count, setCountsss] = useState(0);

    const increment = () => {
        setCountsss(count + 1);
    };
    return (
        <>
            <div className='mb-2'>You have push the button this {count} times</div>
            <button onClick={increment}>Increment</button>
        </>
    );
}
export default CounterApp;