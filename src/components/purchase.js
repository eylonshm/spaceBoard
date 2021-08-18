import React, { useCallback } from 'react'
import whatsAppLogo from '../images/whatsAppLogo.png'
import '../styles/purchase.css'
import { useHistory } from 'react-router-dom'

const Purchase = () => {
  const history = useHistory()
  const moveToContactUs = useCallback(() => {
    console.log('moving')
    history.push('/contact-us')
  }, [history])
  return (
    <div style={styles.purchaseWrapper}>
      <p style={styles.title}>?משלכם SPACE BOARD רוצים</p>
      <div style={styles.button} onClick={moveToContactUs}>
        לרכישה
      </div>
      <span className='line' />
      <p style={styles.title}>WhatsApp לשיחה מהירה עם נציג ב</p>

      <a href='https://api.whatsapp.com/send?phone=972524315060&text=%D7%94%D7%99%D7%99,%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A7%D7%A0%D7%95%D7%AA%20Space%20Board,%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D.'>
        <img style={styles.whatsAppLogo} src={whatsAppLogo} />
      </a>
    </div>
  )
}

export default Purchase

const styles = {
  purchaseWrapper: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'AGENCY-FB',
  },
  title: {
    fontSize: '1.5em',
    margin: '0',
  },
  button: {
    display: 'flex',
    width: '100px',
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px 15px',
    fontSize: '1.2em',
    margin: '10px 0 10px 0',
    cursor: 'pointer',
  },
  line: {
    width: '300px',
    height: '3px',
    backgroundColor: 'black',
    marginBottom: '10px',
  },
  whatsAppLogo: {
    margin: '10px',
    height: '50px',
  },
}
