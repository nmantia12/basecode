import React from 'react'
import { StaticImageData } from 'next/image'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'mediaBlock' }> & {
  staticImage?: StaticImageData
  id?: string
  gutters?: boolean
}

export const MediaBlock: React.FC<Props> = props => {
  const { media, position = 'default', staticImage, gutters } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <div className={classes.mediaBlock}>
      {position === 'fullscreen' && (
        <div className={classes.fullscreen}>
          <Media resource={media} src={staticImage} />
        </div>
      )}
      {position === 'default' && (
        <Gutter left={!gutters && false } right={!gutters && false }>
          <Media resource={media} src={staticImage} />
        </Gutter>
      )}
      {caption && (
        <Gutter className={classes.caption} left={!gutters && false } right={!gutters && false }>
          <RichText content={caption} />
        </Gutter>
      )}
    </div>
  )
}
