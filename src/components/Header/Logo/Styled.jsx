import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLogo = styled(Link)`
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
