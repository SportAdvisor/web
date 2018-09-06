import _ from 'lodash'
import React, {Component} from 'react'

import {locales, i18nInstance, handleChangeLanguage} from 'i18n'
import {StyledSelect, StyledOption, StyledSelectWrapper} from '../Language'

export class SALanguage extends Component {
    render() {
        return (
            <StyledSelectWrapper>
                <StyledSelect defaultValue={i18nInstance.language} onChange={handleChangeLanguage}>
                    {this.renderLocalesOptions()}
                </StyledSelect>
            </StyledSelectWrapper>
        )
    }

    renderLocalesOptions = () =>
        _.map(locales, locale => (
            <StyledOption key={locale.locale} value={locale.locale}>
                {locale.locale}
            </StyledOption>
        ))
}
