import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { ArchiveBlock } from '../../_blocks/ArchiveBlock'
import { CallToActionBlock } from '../../_blocks/CallToAction'
import { MediaBlock } from '../../_blocks/MediaBlock'
import { BackgroundColor } from '../../_components/BackgroundColor'
// import { Blocks } from '../../_components/Blocks'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'
import { VerticalPadding, VerticalPaddingOptions } from '../../_components/VerticalPadding'
import { toKebabCase } from '../../_utilities/toKebabCase'

import classes from './index.module.scss'

const blockComponents = {
  cta: CallToActionBlock,
  mediaBlock: MediaBlock,
  archive: ArchiveBlock,
}

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
                  <Fragment>
                    {blocks.map((block, index) => {
                      const { blockName, blockType } = block

                      if (blockType && blockType in blockComponents) {
                        const Block = blockComponents[blockType]

                        // the cta block is containerized, so we don't consider it to be inverted at the block-level
                        const blockIsInverted =
                          'invertBackground' in block && blockType !== 'cta'
                            ? block.invertBackground
                            : false
                        const prevBlock = blocks[index - 1]

                        const prevBlockInverted =
                          prevBlock &&
                          'invertBackground' in prevBlock &&
                          prevBlock?.invertBackground

                        const isPrevSame = Boolean(blockIsInverted) === Boolean(prevBlockInverted)

                        let paddingTop: VerticalPaddingOptions = 'large'
                        let paddingBottom: VerticalPaddingOptions = 'large'

                        if (prevBlock && isPrevSame) {
                          paddingTop = 'none'
                        }

                        if (index === blocks.length - 1) {
                          paddingBottom = 'large'
                        }

                        if (index === 0) {
                          paddingTop = 'none'
                        }

                        if (Block) {
                          return (
                            <BackgroundColor key={index} invert={blockIsInverted}>
                              <VerticalPadding top={paddingTop} bottom={paddingBottom}>
                                {/* @ts-expect-error */}
                                <Block gutters={false} id={toKebabCase(blockName)} {...block} />
                              </VerticalPadding>
                            </BackgroundColor>
                          )
                        }
                      }
                      return null
                    })}
                  </Fragment>
                )}
              </div>
            )
          })}
      </div>
    </Gutter>
  )
}
