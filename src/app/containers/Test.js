
import React from 'react';
import H1 from '../components/H1';
import { Link } from 'react-router';

function Test() {
    return (
        <section className="lets-go">
            <header>
                <H1><strong style={{ color: 'black' }}>This is the Test Page</strong></H1>
                <p>Feel free to go home by clicking <Link to="/">Home</Link></p>
            </header>
        </section>
    );
}

export default Test;
