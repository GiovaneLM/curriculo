import React from 'react';
import foto from '../Imagens/fotodogi.jpeg'

function Header() {
    return (
        <header className="header">
            <nav>
                <img src= {foto} alt='Foto de Perfil de Giovane Limeira Martins'></img>
            </nav>
        </header>
    )
}
export default Header;