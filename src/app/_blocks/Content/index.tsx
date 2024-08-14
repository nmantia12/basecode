import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { columns } = props

  return (
    <Gutter className={classes.content}>
      <div className={classes.grid}>
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, richText, link, size, blocks } = col
            return (
              <div key={index} className={[classes.column, classes[`column--${size}`]].join(' ')}>
                {richText && <RichText content={richText} />}
                {enableLink && <CMSLink className={classes.link} {...link} />}
                {blocks && blocks.length > 0 && (
                  <Blocks gutters={false} blocks={blocks} disableTopPadding={true} />
                )}
              </div>
            )
          })}
      </div>
    </Gutter>
  )
}
