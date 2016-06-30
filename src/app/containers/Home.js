
import React from 'react';
import H1 from '../components/H1';
import { Link } from 'react-router';

function Home() {
    return (
        <section className="lets-go">
            <header>
                <img src="images/logo.svg" alt="just a test"/>
                <H1><strong style={{ color: 'black' }}>This is the Home Page</strong></H1>
                <p>Feel free to change page by clicking <Link to="/test">Test</Link></p>
            </header>
        </section>
    );
}

export default Home;
