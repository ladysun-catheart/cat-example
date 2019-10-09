import React from 'react';
import GlobalModalCreator from './global-modal-creator';
import { Subject } from 'rxjs';

class GlobalModalService {
    //Private props
    config = Symbol('config');
    internalConfig = Symbol('internalConfig');
    propsModal = Symbol('propsModal');

    constructor(config) {
        this[this.config] = config;
        this[this.internalConfig] = this.createInternalConfig(config);
        this.observer = new Subject({});
        this.BodyComponent = null;
        this[this.propsModal] = {};
    }

    createInternalConfig(config) {
        const internalConfig = {};
        for (const sectionKey in config) {
            const section = { isActive: false, checkList: {} };
            config[sectionKey].checkList && config[sectionKey].checkList.forEach(check => {
                const key = { isChecked: false };
                section.checkList[check] = key;
            });
            internalConfig[sectionKey] = section;
        }
        return internalConfig;
    }

    resetInternalConfigCheck(section) {
        const checkList = this[this.internalConfig][section].checkList;
        checkList && checkList.forEach(check => {
            const resetKey = {
                ...check,
                isChecked: false,
            };
            check = resetKey;
        });
    }

    updateChecking(section, check, info) {
        const checkList = this[this.internalConfig][section].checkList
        const checkAux = {
            ...checkList[check],
            isChecked: true,
            info: info
        };
        checkList[check] = checkAux;
        this.canShowPopUp(checkList) && this.observer.next({
            ...this[this.propsModal],
            body: this.getBodyModal(checkList),
            isVisible: true
        });
    }

    canShowPopUp(checkList) {
        return Object.keys(checkList).every(checkKey => checkList[checkKey].isChecked);
    }

    getBodyModal(checkList) {
        const bodyCompo = this[this.propsModal].body;
        const infoList = Object.keys(checkList).map(checkKey => checkList[checkKey].info);
        return bodyCompo ?
            () => bodyCompo({ checkList: infoList }) :
            () => (
                <ul>
                    {infoList.map(info => <li>{info}</li>)}
                </ul>
            );
    }

    closeModal() {
        this.observer.next({ ...this[this.propsModal], isVisible: false });
    }

    updateGlobalModalProps(newProps) {
        this[this.propsModal] = { ...this[this.propsModal], ...newProps };
    }

    getGlobalModal(Modal, configModal) {
        return GlobalModalCreator(Modal, this.observer, configModal);
    }

}

export default GlobalModalService;