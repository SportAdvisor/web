import styled from 'styled-components'
import {Select} from 'antd'

export const StyledSelectWrapper = styled.div`
    .ant-select {
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
    }
`
export const StyledSelect = styled(Select)`
    .ant-select-selection {
        height: 40px;
    }

    .ant-select-selection__rendered {
        line-height: 34px;
    }
`
export const StyledOption = styled(Select.Option)``
