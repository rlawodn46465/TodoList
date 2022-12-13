import React from 'react'
import styled from 'styled-components'

const HeaderBox = styled.div`
  width : 100%;
  height : 40px;
  background-color: lightgray;
  text-align: center;
  font-size: 24px;
  line-height: 40px;
`

const Header = ({headText}) => {
  return (
    <HeaderBox>{headText}</HeaderBox>
  )
}

export default Header