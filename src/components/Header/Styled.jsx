import styled from 'styled-components'
import {Layout} from 'antd'

export const StyledHeader = styled(Layout.Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 76px;
    background: transparent;
    border-bottom: 1px solid ${props => props.theme.header.transitionalBorderColor};
`
