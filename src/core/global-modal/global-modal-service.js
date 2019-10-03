import React from 'react';
import { Subject } from 'rxjs';

class GlobalModalService {
    config = Symbol('config');
    internalConfig = Symbol('internalConfig');
    propsModal = Symbol('propsModal');

    constructor(config) {
        this[this.config] = config;
        this[this.internalConfig] = this.createInternalConfig(config);
        this.observer = new Subject({});
        this[this.propsModal] = {};
    }

    //todo optimize
    createInternalConfig(config) {
        const internalConfig = {};
        for (const sectionKey in config) {
            const section = { ...config[sectionKey] };
            section.isActive = false;
            for (const checkKey in section.checkList) {
                const key = { ...section.checkList[checkKey], isChecked: false };
                section.checkList[checkKey] = key;
            }
            internalConfig[sectionKey] = section;
        }
        return internalConfig;
    }

    resetInternalConfigCheck(section) {
        const checkList = this[this.internalConfig][section].checkList;
        const checkListOri = this[this.config][section].checkList;
        for (const checkKey in checkList) {
            const resetKey = {
                ...checkList[checkKey],
                isChecked: false,
                // info: checkListOri[checkKey].info
            };
            checkList[checkKey] = resetKey;
        }
    }

    updateInternalConfigCheck(section, check, info) {
        const checkList = this[this.internalConfig][section].checkList
        const checkAux = {
            ...checkList[check],
            isChecked: true,
            info: info
        };
        checkList[check] = checkAux;
        this.canShowPopUp(checkList) && this.observer.next({...this[this.propsModal], body: this.getBodyModal(checkList), isVisible: true});
    }

    canShowPopUp(checkList) {
        return Object.keys(checkList).every(checkKey => checkList[checkKey].isChecked);
    }

    getBodyModal(checkList) {
        return Object.keys(checkList).map(checkKey => <p>{checkList[checkKey].info}</p>);
    }

    closeModal() {
        this.observer.next({...this[this.propsModal], isVisible: false});
    }

    updateGlobalModalProps(newProps) {
        this[this.propsModal] = {...this[this.propsModal], ...newProps};
        // this.observer.next({...this[this.propsModal], isVisible: true});
    }

}

export default GlobalModalService;