import React, { useEffect, useState } from 'react'
import colors from '../assets/colors/colors'
import '../assets/styles/textSection.css'

const TextSection = ({ sectionColor, textColor, title, subTitle, texts, centerItems, children }) => {
    const [textOrChildren, setTextOrChildren] = useState()

    useEffect(() => {
        if (children !== undefined) {
            setTextOrChildren(children)
        } else {
            setTextOrChildren(texts.map((textString) => <p>{textString}</p>))
        }
    }, [])
    const wrapperProps = {
        backgroundColor: sectionColor ? sectionColor : null,
        color: sectionColor ? textColor : null,
        alignItems: centerItems ? 'center' : 'flex-end',
    }
    return (
        <div className="textSectionWrapper" style={wrapperProps}>
            {subTitle && <p style={styles.subTitle}>{subTitle}</p>}
            <p style={styles.title}>{title}</p>
            <p style={{ padding: '0 20px', margin: '0', textAlign: centerItems ? 'center' : 'right' }}>{textOrChildren} </p>
        </div>
    )
}

export default TextSection

const styles = {
    textSectionWrapper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors[3],
        color: 'white',
        fontFamily: 'AGENCY-FB',
        alignItems: 'flex-end',
        padding: '20px 0',
        flex: 1,
    },
    subTitle: {
        padding: '0 20px',
        margin: '0',
    },
    title: {
        padding: '0 20px',
        fontSize: '2em',
        margin: '0 0 20px 0',
    },
}
