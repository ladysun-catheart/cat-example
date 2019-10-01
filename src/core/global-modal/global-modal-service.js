import { BehaviorSubject } from 'rxjs';

class GlobalModalService {
    config = Symbol('config');
    internalConfig = Symbol('internalConfig');

    constructor(config, propsModal) {
        this[this.config] = config;
        this[this.internalConfig] = this.createInternalConfig(config);
        this.observer = new BehaviorSubject(false);
        this.propsModal = propsModal;
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
        const checkList = this.internalConfig[section].checkList;
        const checkListOri = this.config[section].checkList;
        for (const checkKey in checkList) {
            const resetKey = {
                ...checkList[checkKey],
                isChecked: false,
                info: checkListOri[checkKey].info
            };
            checkList[checkKey] = resetKey;
        }
    }

    updateInternalConfigCheck(section, check, info) {
        const checkList = this.internalConfig[section].checkList
        const checkAux = {
            ...checkList[check],
            isChecked: true,
            info: checkList[check].info || info
        };
        checkList[check] = checkAux;
        this.canShowPopUp(checkList) && this.observer.next(this.propsModal);
    }

    canShowPopUp(checkList) {
        return Object.keys(checkList).every(checkKey => checkList[checkKey].isChecked);
    }

}

export default GlobalModalService;

/* const config = {
    PRE_SECTION: {
        isActive: false,
    },
    CAT_SECTION: { 
        isActive: false,
        checkList: {
            CAT_LIST: { info: 'this section is wrong' }
        }
    },
    CONTACT_SECTION: {
        isActive: false,
    }
}; */