import React, { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Sponsors from '../components/Sponsors';
import Places from '../components/Places';

const Homepage = () => {
    const [modal, setModal] = useState("inactive");
    return ( 
        <>
        <Header setModal={setModal} />
        <main>
            <Intro />
            <Sponsors />
            <section>
                <h2>Inspiration for your next adventure</h2>
                <Places />
            </section>
        </main>
        </>
     );
}
 
export default Homepage;