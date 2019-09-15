/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { rgb } from '../../themes/utils'
import { font, toClassNames } from '../utils'

const StyledItem = styled('a')`
  padding: 0.1em 0.5em;
  cursor: pointer;
  border: 1px solid
    ${({ active, theme, variant }) =>
      active ? rgb(theme.colors[variant].light) : 'transparent'};
  border-radius: ${({ theme }) => theme.config.radius};
  margin: 0 0.1em;
  ${({ theme }) => font(theme)};
  &:hover {
    background: ${({ theme, variant }) => rgb(theme.colors[variant].alpha)};
  }
`
const Styled = styled('nav')`
  display: flex;
`

class Pagination extends React.Component {
  constructor(props) {
    super(props)

    const { page, pages } = props
    const links = this.getLinks(page, pages)
    this.state = {
      page,
      pages,
      links,
    }

    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
    this.setPage = this.setPage.bind(this)
    this.getLinks = this.getLinks.bind(this)
  }

  previous() {
    const { page } = this.state
    if (page === 1) {
      return
    }
    const newPage = page - 1
    this.props.onChange(newPage, newPages => {
      const links = this.getLinks(newPage, newPages)
      this.setState({ links, pages: newPages, page: newPage })
    })
  }

  next() {
    const { page, pages } = this.state
    if (page === pages) {
      return
    }
    const newPage = page + 1
    this.props.onChange(newPage, newPages => {
      const links = this.getLinks(newPage, newPages)
      this.setState({ links, pages: newPages, page: newPage })
    })
  }

  setPage(event) {
    const newPage = parseInt(event.target.dataset.page, 10)
    this.props.onChange(newPage, newPages => {
      const links = this.getLinks(newPage, newPages)
      this.setState({ links, pages: newPages, page: newPage })
    })
  }

  getLinks(page, pages) {
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

  render() {
    const { page, links } = this.state
    const { variant, className, ...others } = this.props
    return (
      <Styled className={toClassNames(className, 'pagination')} {...others}>
        <StyledItem onClick={this.previous} variant={variant}>
          Previous
        </StyledItem>
        {links.map(i => {
          const active = i === page
          return (
            <StyledItem
              key={uuid()}
              data-page={i}
              active={active}
              variant={variant}
              onClick={this.setPage}
            >
              {i}
            </StyledItem>
          )
        })}
        <StyledItem onClick={this.next} variant={variant}>
          Next
        </StyledItem>
      </Styled>
    )
  }
}

Pagination.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'light',
    'neutral',
    'dark',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

Pagination.defaultProps = {
  variant: 'neutral',
}

export default Pagination
