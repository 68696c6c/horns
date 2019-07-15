/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import { rgb } from '../../themes/utils'

const StyledItem = styled('a')`
  padding: .1em .5em;
  cursor: pointer;
  border: 1px solid ${({ active, theme, variant }) => active ? rgb(theme.colors[variant].light) : 'transparent'};
  border-radius: ${({ theme }) => theme.config.radius};
  margin: 0 .1em;
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

    this.state = {
      page: props.page,
      pages: props.pages,
      links: [],
    }

    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
    this.getLinks = this.getLinks.bind(this)
    this.setPage = this.setPage.bind(this)
  }

  componentDidMount() {
    const links = this.getLinks(this.state.page, this.state.pages)
    this.setState(() => ({ links }))
  }

  previous() {
    if (this.state.page === 1) {
      return
    }
    this.setState(prevState => {
      const page = prevState.page - 1
      return {
        page,
        links: this.getLinks(page, prevState.pages),
      }
    }, () => this.props.onChange(this.state.page))
  }

  next() {
    if (this.state.page === this.state.pages) {
      return
    }
    this.setState(prevState => {
      const page = prevState.page + 1
      return {
        page,
        links: this.getLinks(page, prevState.pages),
      }
    }, () => this.props.onChange(this.state.page))
  }

  getLinks(page, pages) {
    const { items, variant } = this.props
    const max = items > pages ? pages : items
    let links = []
    const half = Math.floor(max / 2)
    let start = 1
    let end = max
    if (page >= pages - half) {
      start = pages - max <= 0 ? 1 : pages - max
      end = pages
    } else if (page > half) {
      start = page - half <= 0 ? 1 : page - half
      end = page + half
    }
    for (let i = start; i <= end; i++) {
      const active = i === page
      links.push(<StyledItem key={uuid()} data-page={i} active={active} variant={variant} onClick={this.setPage}>{i}</StyledItem>)
    }
    return links
  }

  setPage(event) {
    const page = parseInt(event.target.dataset.page)
    this.setState(prevState => {
      return {
        page,
        links: this.getLinks(page, prevState.pages),
      }
    }, () => this.props.onChange(this.state.page))
  }

  render() {
    const { variant, className, ...others } = this.props
    return (
      <Styled className={(className, 'pagination')} {...others}>
        <StyledItem onClick={this.previous} variant={variant}>Previous</StyledItem>
        {this.state.links}
        <StyledItem onClick={this.next} variant={variant}>Next</StyledItem>
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
  items: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

Pagination.defaultProps = {
  items: 6,
  variant: 'neutral',
}

export default Pagination
