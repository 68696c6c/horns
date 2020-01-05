import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import {
  colorwayDefaultProps,
  colorwayPropTypes,
  fontDefaultProps,
  fontPropTypes,
  handleProps,
} from '../../mixins'

import * as Styled from './items/styles'

class Pagination extends React.Component {
  constructor(props) {
    super(props)

    const { page, pages } = props
    const links = Pagination.getLinks(page, pages)
    this.state = {
      page,
      pages,
      links,
    }

    Pagination.getLinks = Pagination.getLinks.bind(this)
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
    this.setPage = this.setPage.bind(this)
  }

  static getLinks(page, pages) {
    const links = []
    const half = Math.floor(pages / 2)
    let start = 1
    let end = pages
    if (page >= pages - half) {
      start = pages - pages <= 0 ? 1 : 0
      end = pages
    } else if (page > half) {
      start = page - half <= 0 ? 1 : page - half
      end = page + half
    }
    for (let i = start; i <= end; i += 1) {
      links.push(i)
    }
    return links
  }

  setPage(event) {
    const newPage = parseInt(event.target.dataset.page, 10)
    const { onChange } = this.props
    onChange(newPage, newPages => {
      const links = Pagination.getLinks(newPage, newPages)
      this.setState({ links, pages: newPages, page: newPage })
    })
  }

  previous() {
    const { page } = this.state
    if (page === 1) {
      return
    }
    const newPage = page - 1
    const { onChange } = this.props
    onChange(newPage, newPages => {
      const links = Pagination.getLinks(newPage, newPages)
      this.setState({ links, pages: newPages, page: newPage })
    })
  }

  next() {
    const { page, pages } = this.state
    if (page === pages) {
      return
    }
    const newPage = page + 1
    const { onChange } = this.props
    onChange(newPage, newPages => {
      const links = Pagination.getLinks(newPage, newPages)
      this.setState({ links, pages: newPages, page: newPage })
    })
  }

  render() {
    const { page, links } = this.state
    const { colorway, navColorway, className, ...others } = this.props
    return (
      <Styled.PaginationNav
        colorway={navColorway}
        {...handleProps(others, 'pagination')}
      >
        <Styled.Page onClick={this.previous} colorway={colorway}>
          Previous
        </Styled.Page>
        {links.map(i => (
          <Styled.Page
            key={uuid()}
            data-page={i}
            current={i === page}
            colorway={colorway}
            onClick={this.setPage}
          >
            {i}
          </Styled.Page>
        ))}
        <Styled.Page onClick={this.next} colorway={colorway}>
          Next
        </Styled.Page>
      </Styled.PaginationNav>
    )
  }
}

const { colorway: colorwayOptions } = colorwayPropTypes()
Pagination.propTypes = {
  ...colorwayPropTypes(),
  ...fontPropTypes(),
  navColorway: colorwayOptions,
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

const { colorway: colorwayDefault } = colorwayDefaultProps(
  'background:secondary'
)
Pagination.defaultProps = {
  ...colorwayDefaultProps(),
  ...fontDefaultProps('link'),
  navColorway: colorwayDefault,
}

export default Pagination
