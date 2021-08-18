import React from 'react'
import colors from '../colors/colors'

const phoneBanner = () => {
  return (
    <div style={styles.bannerWrapper}>
      <p>! מבצעי הקיץ לוהטים - מהרו להזמין</p>
    </div>
  )
}

export default phoneBanner

const styles = {
  bannerWrapper: {
    display: 'flex',
    width: '100%',
    backgroundColor: colors[4],
    color: 'white',
    fontFamily: 'AGENCY-FB',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30px',
    marginBottom: '',
  },
}
