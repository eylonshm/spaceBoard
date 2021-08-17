import logo from './logo.svg'
import './assets/fonts/fonts.css'
import Header from './components/header'
import PhoneBanner from './components/phoneBanner'
import TextSection from './components/textSection'
import ImageSlider from './components/imageSlider'
import { useMediaQuery } from 'react-responsive'
import sectionsData from './assets/data/textSections'
import Purchase from './components/purchase'
import ContactUs from './components/contactUs'
import Footer from './components/footer'
import './assets/styles/app.css'

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom'

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 700)' })
  const flexDirectionIfMobile = {
    flexDirection: isMobile ? 'row' : 'column',
  }

  return (
    <>
      <Header />
      <PhoneBanner />
      <Router>
        <Switch>
          <Route path='/contact-us'>
            <ContactUs />
            <Footer bottomFooter='yes' />
          </Route>
          <Route path='/'>
            <ImageSlider />
            <div style={{ ...styles.textSectionsContainer, flexDirectionIfMobile }}>
              <TextSection
                sectionColor={sectionsData[0].sectionColor}
                textColor={sectionsData[0].textColor}
                title={sectionsData[0].title}
                subTitle={sectionsData[0].subTitle}
                texts={sectionsData[0].texts}
              />
              <TextSection
                sectionColor={sectionsData[1].sectionColor}
                textColor={sectionsData[1].textColor}
                title={sectionsData[1].title}
                subTitle={sectionsData[1].subTitle}
                texts={sectionsData[1].texts}
              />
              <TextSection
                sectionColor={sectionsData[2].sectionColor}
                textColor={sectionsData[2].textColor}
                title={sectionsData[2].title}
                subTitle={sectionsData[2].subTitle}
                texts={sectionsData[2].texts}
              />
            </div>
            <ImageSlider />
            <TextSection sectionColor={'#0096c7'} textColor={sectionsData[2].textColor} title={'מידות ומחירים'} centerItems>
              <div style={{ whiteSpace: 'pre-line', display: 'flex', justifyContent: 'space-around' }}>
                <p style={{ width: '100px' }}>
                  <span style={styles.lineThrough}>1050</span> 800₪
                </p>
                <p>54L</p>
                <p>6'0</p>
              </div>
              <div style={{ whiteSpace: 'pre-line', display: 'flex', justifyContent: 'space-around' }}>
                <p style={{ width: '100px' }}>
                  <span style={styles.lineThrough}>1150</span> 850₪
                </p>
                <p>60L</p>
                <p>6'6</p>
              </div>
              <div style={{ whiteSpace: 'pre-line', display: 'flex', justifyContent: 'space-around' }}>
                <p style={{ width: '100px' }}>
                  <span style={styles.lineThrough}>1250</span> 850₪
                </p>
                <p>65L</p>
                <p>7'0</p>
              </div>
              <div style={{ whiteSpace: 'pre-line', display: 'flex', justifyContent: 'space-around' }}>
                <p style={{ width: '100px' }}>1300₪</p>
                <p>72L</p>
                <p>7'6</p>
              </div>
              <div style={{ whiteSpace: 'pre-line', display: 'flex', justifyContent: 'space-around' }}>
                <p style={{ width: '100px' }}>
                  <span style={styles.lineThrough}>1400</span> 890₪
                </p>
                <p>80L</p>
                <p>8'0</p>
              </div>
              <div style={{ whiteSpace: 'pre-line', display: 'flex', justifyContent: 'space-around' }}>
                <p style={{ width: '100px' }}>1550₪</p>
                <p>86L</p>
                <p>8'4</p>
              </div>
              <div
                style={{
                  whiteSpace: 'pre-line',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <p style={{ width: '100px' }}>1700₪</p>
                <p>100L</p>
                <p>9'0</p>
              </div>

              <p>כל הגלשנים מגיעים כולל ליש וסט חרבות</p>
              <p>כל מה שנשאר לכם זה לקחת את הגלשן לים ולהתחיל לגלוש</p>
              <p>צבעים: אדום, צהוב, כחול, ירוק, תכלת, כתום</p>
              <p>קיימת אופצייה למשלוחים לכל הארץ</p>
            </TextSection>
            <Purchase />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App

const styles = {
  textSectionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  lineThrough: {
    textDecoration: 'line-through',
  },
}
