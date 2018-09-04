import styled from 'styled-components'
import {Layout} from 'antd'
import {Link} from 'react-router-dom'

export const SAHeader = styled(Layout.Header)`
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 76px;
    background: transparent;
    border-bottom: 1px solid ${props => props.theme.header.transitionalBorderColor};
`
export const SALogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 180px;
    height: 48px;
    padding: 0 16px;

    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    text-decoration: none;

    background-image: linear-gradient(
        90deg,
        ${props => props.theme.header.logo.gradientFrom} 0%,
        ${props => props.theme.header.logo.gradientTo} 100%
    );
    border-radius: 6px;

    &:hover,
    &:focus {
        color: white;
        text-decoration: none;
    }
`
