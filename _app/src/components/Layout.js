/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header'
import OpenDevLogo from './OpenDevLogo'
import styles from './Layout.module.css'

const Layout = ({ className = '', children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={classNames(className, styles.mainContent)}>
        {children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <a
            href="https://opendevufcg.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <OpenDevLogo size={100} />
          </a>
          <p className={styles.copyRight}>
            &copy; {new Date().getFullYear()} OpenDevUFCG, feito com{' '}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
