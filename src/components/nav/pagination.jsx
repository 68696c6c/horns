import React from 'react'
import PropTypes from 'prop-types'
import styled, { cx } from 'react-emotion'
import uuid from 'uuid/v4'
import { rgb } from '../../themes/utils'

const StyledControl = styled('a')`
  padding: .5em;
  cursor: pointer;
`
const StyledItem = styled('a')`
  padding: .5em;
  cursor: pointer;
  background: ${({ active, theme }) => active ? rgb(theme.colors.neutral.light) : 'none'};
`
const Styled = styled('nav')`
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
    const { items } = this.props
    let links = []
    const half = Math.floor(items / 2)
    let start = 1
    let end = items
    if (page >= pages - half) {
      start = pages - items <= 0 ? 1 : pages - items
      end = pages
    } else if (page > half) {
      start = page - half <= 0 ? 1 : page - half
      end = page + half
    }
    for (let i = start; i <= end; i++) {
      const active = i === page
      links.push(<StyledItem key={uuid()} data-page={i} active={active} onClick={this.setPage}>{i}</StyledItem>)
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
    const { className, ...others } = this.props
    return (
      <Styled className={cx(className, 'pagination')} {...others}>
        <StyledControl onClick={this.previous}>Previous</StyledControl>
        {this.state.links}
        <StyledControl onClick={this.next}>Next</StyledControl>
      </Styled>
    )
  }
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  items: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

Pagination.defaultProps = {
  items: 6,
}

export default Pagination
