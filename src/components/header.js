import React, { useState } from 'react'
import spaceBoardLogo from '../assets/images/spaceBoardLogo.png'
import instagramLogoBlack from '../assets/images/instagramLogoBlack.png'

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    return (
        <div style={styles.headerWrapper}>
            <img style={styles.logo} src={spaceBoardLogo}></img>
            <p style={styles.title}>SPACE BOARD</p>
            <a style={{ marginTop: '5px' }} href="https://www.instagram.com/space_board_/">
                <img style={styles.menuIcon} src={instagramLogoBlack} onClick={() => setMenuIsOpen()}></img>
            </a>
        </div>
    )
}

export default Header

const styles = {
    headerWrapper: {
        display: 'flex',
        width: '100%',
        backgroundColor: 'white',
        color: 'black',
        fontFamily: 'AGENCY-FB',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100px',
    },
    title: {
        fontSize: '1.5em',
    },
    logo: {
        height: 33,
        margin: '0 0 5px 10px',
    },
    menuIcon: {
        height: 30,
        marginRight: '10px',
    },
}
