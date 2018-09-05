import React, {Component} from 'react'

import {StyledSelect, StyledOption, StyledSelectWrapper} from '../Language'

export class SALanguage extends Component {
    render() {
        return (
            <StyledSelectWrapper>
                <StyledSelect defaultValue="ru" onChange={this.handleChangeLanguage}>
                    <StyledOption value="ru">ru</StyledOption>
                    <StyledOption value="en">en</StyledOption>
                </StyledSelect>
            </StyledSelectWrapper>
        )
    }

    handleChangeLanguage = language => {
        console.log(language)
    }
}
