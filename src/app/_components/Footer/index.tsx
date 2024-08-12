import React from 'react'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'

import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <footer className={classes.footer}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <picture>
            <svg viewBox="0 0 47.7 37.8" className={classes.logo}>
              <title>NMD Logo</title>
              <g>
                <polygon points="47.7,0 11.1,0 14.6,4.7 43.1,4.7 43.1,33.2 35.3,33.2 38.6,37.8 47.7,37.8" />
                <polygon points="4.6,33.2 4.6,4.7 10.1,4.7 6.7,0 0,0 0,37.8 34.2,37.8 30.9,33.2" />
                <polygon points="9.3,9.3 9.3,28.5 13.9,28.5 13.9,17.6 21.9,28.5 27.5,28.5 15.3,11.8 13.5,9.3" />
                <polygon points="33.8,17.3 33.8,28.5 38.4,28.5 38.4,9.3 33.5,9.3 28.9,16 24.1,9.3 17.9,9.3 20.9,13.4 27.3,22.2 30.5,22.2" />
              </g>
            </svg>
          </picture>
        </Link>
        <nav className={classes.nav}>
          <ThemeSelector />
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} />
          })}
          <Link href="/admin">Admin</Link>
          <Link
            href="https://github.com/payloadcms/payload/tree/main/templates/website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </Link>
          <Link href="https://payloadcms.com" target="_blank" rel="noopener noreferrer">
            Payload
          </Link>
        </nav>
      </Gutter>
    </footer>
  )
}
