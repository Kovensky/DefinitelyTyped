// Type definitions for react-i18next 8.0
// Project: https://github.com/i18next/react-i18next
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
//                 Simon Baumann <https://github.com/chnoch>
//                 Benedict Etzel <https://github.com/beheh>
//                 Wu Haotian <https://github.com/whtsky>
//                 Jessica Franco <https://github.com/Kovensky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { TranslationFunction } from "i18next";

import {
    setDefaults,
    getDefaults,
    setI18n,
    getI18n,
    ReactI18NextOptions,
    reactI18nextModule,
    withContext,
    withI18n
} from "./src/context";
import I18n from "./src/I18n";
import I18nextProvider from "./src/I18nextProvider";
import Interpolate from "./src/interpolate";
import loadNamespaces from "./src/loadNamespaces";
import Trans from "./src/trans";
import { withNamespaces } from "./src/withNamespaces";

export {
    setDefaults,
    getDefaults,
    setI18n,
    getI18n,
    ReactI18NextOptions,
    reactI18nextModule,
    withContext,
    withI18n,
    I18n,
    I18nextProvider,
    Interpolate,
    loadNamespaces,
    Trans,
    withNamespaces,
    TranslationFunction
};

export { InjectedI18nProps, InjectedTranslateProps } from "./src/props";

export as namespace reactI18Next;
