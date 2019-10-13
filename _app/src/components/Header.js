import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import Logo from './Logo'
import styles from './Header.module.css'

const Header = ({ siteTitle = '' }) => {
  const [theme, setTheme] = useState(window.__theme)

  const { sun, moon } = useStaticQuery(graphql`
    query {
      sun: file(relativePath: { eq: "sun.svg" }) {
        publicURL
      }

      moon: file(relativePath: { eq: "moon.svg" }) {
        publicURL
      }
    }
  `)

  const handleThemeChange = () => {
    window.__setPreferredTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    window.__onThemeChange = theme => {
      setTheme(theme)
    }

    return () => {
      window.__onThemeChange = () => {}
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          <Link to="/" className={styles.homeLink}>
            <Logo className={styles.logo} />
            <span className={styles.headerText}>{siteTitle}</span>
          </Link>
        </h1>
        <button className={styles.themeButton} onClick={handleThemeChange}>
          <img
            width={28}
            height={28}
            src={theme === 'light' ? moon.publicURL : sun.publicURL}
            alt="Troca entre tema escuro e tema claro"
          />
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
