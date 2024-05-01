import React from "react"
import "./Home.css"
import sigma from "./sigma.jpg"
export default function Home() {
    return (
        <>
        <div className="home">
            <h1 className="home__title">Тимофей Белый</h1>
            <p className="home++descr"> 18 лет, плейбой, филантроп, освобожденный</p>
            <img className="home__img" src={sigma} alt="Photo"/>
        </div>


        </>
    );
}