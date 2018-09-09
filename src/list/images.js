import React from 'react'
import PropTypes from 'prop-types'
import GridThirds from '../grid/thirds'
import Area from '../grid/area'
import { cx } from 'react-emotion'

const ListImagesContent = (props) => {
  const activeClass = props.active ? 'active' : ''
  return (
    <li className={cx('list-images-content', props.className, activeClass)}>
      {props.children}
    </li>
  )
}

ListImagesContent.propTypes = {
  active: PropTypes.bool,
}

export const ListImagesItem = (props) => {
  return (
    <div className={cx('list-images-item', props.className)}>{props.children}</div>
  )
}

ListImagesItem.propTypes = {
  image: PropTypes.object,
}

export const ListImages = (props) => {
  const activeIndex = props.activeItem || 0
  return (
    <GridThirds className={cx('list-images')}>
      <Area className={cx('list-images-image')}>
        {props.children[activeIndex].props.image}
      </Area>
      <Area className={cx('list-images-items')}>
        {props.heading}
        <ol className={cx('images')}>
          {props.children.map((items, index) => {
            return <ListImagesContent children={items} active={index === activeIndex} key={index}/>
          })}
        </ol>
      </Area>
    </GridThirds>
  )
}

ListImages.propTypes = {
  heading: PropTypes.object,
  activeItem: PropTypes.number,
}

export default ListImages
