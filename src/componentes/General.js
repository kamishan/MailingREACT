import React from 'react';
import '../styles/Styles.css'
import carrito from '../Images/iconfinder_Smart_Watch__Cart_4016104.png';
import tanjiro from '../Images/tanjiro.jpg';
import batman from '../Images/batman.jpg';
import hulk from '../Images/hulk.jpg';
import spidi from '../Images/Spidi.jpg';
import wolwerine from '../Images/wolwerine.jpg';


class General extends React.Component{
    render(){
        return (


   
<div>
    <main>
        <nav>
            <ul>
                <li>Ofertas</li>
                <li>Productos</li>
                <li>Lo Nuevo</li>
                <li>Clasicos</li>
            </ul>
        </nav>
        <section>
            <article className="left">
                <article className="upleft" ><a id="precios" href=""><img src={carrito} alt="carrito" /><p className="num">$99,99</p></a></article>                
                <article className="upright" ><a id="precios" href=""><img src={carrito} alt="carrito"/><p className="num">$49,99</p></a></article>    
                <article className="downleft" ><a id="precios" href=""><img src={carrito} alt="carrito"/> <p className="num">$59,99</p></a></article>
                <article className="downright" ><a id="precios" href=""><img src={carrito} alt="carrito"/><p className="num">$29,99</p></a></article>
            </article>
            <article className="right">
                <a href="https://dungeonmarvels.com/16-figuras-comic">MIRA MÁS AQUÍ</a>
            </article>
        </section>
        <footer>
            <p>All Rights Reserved ©</p>
        </footer>
    
    </main>
</div>
        );
    }
}

export default General;