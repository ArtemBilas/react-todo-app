import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './layout.css';

export default function Layout(props){
    return(
        <div className="Layout">
            <Header />
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}