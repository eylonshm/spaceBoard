import React, { useState, useEffect } from 'react'
import spaceBoardLogoWhite from '../images/spaceBoardLogoWhite.png'
import instagramLogo from '../images/instagramLogo.webp'

const Footer = ({ bottomFooter }) => {
  const [propStyles, setPropStyles] = useState({})

  useEffect(() => {
    console.log('bottomFooter')
    console.log(bottomFooter)
    if (bottomFooter) {
      setPropStyles({
        position: 'absolute',
        bottom: '0',
      })
    }
  }, [])
  return (
    <div style={{ ...styles.footerWrapper, ...propStyles }}>
      <img style={styles.img} src={spaceBoardLogoWhite} />
      <a href='https://www.instagram.com/space_board_/'>
        <img style={styles.img} src={instagramLogo} />
      </a>
    </div>
  )
}

export default Footer

const styles = {
  footerWrapper: {
    backgroundColor: '#050505',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: '100px',
    color: 'white',
    fontFamily: 'AGENCY-FB',
    margin: '0',
    marginTop: 'auto',
    flexShrink: '0',
  },
  img: {
    marginLeft: '10px',
    height: '40px',
    width: '40px',
    margin: '0 10px',
    padding: '5px',
  },
  text: {},
}
