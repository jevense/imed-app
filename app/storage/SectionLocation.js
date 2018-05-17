import React, {AsyncStorage} from 'react-native';

class SectionLocation {
    /**
     * 获取
     * @param key
     * @returns {Promise<T>}
     */
    static get(key) {
        return AsyncStorage.getItem(`${key}`).then(value => {
            return parseInt(value)
        });
    }


    /**
     * 保存
     * @param key
     * @param value
     * @returns {*}
     */
    static save(key, value) {
        return AsyncStorage.setItem(`${key}`, `${value}`)
    }


    /**
     * 更新
     * @param key
     * @param value
     * @returns {Promise<T>}
     */
    static update(key, value) {
        return SectionLocation.get(`${key}`).then(item => {
            return AsyncStorage.setItem(`${key}`, `${item}`);
        });
    }

    /**
     * 更新
     * @param key
     * @returns {*}
     */
    static delete(key) {
        return AsyncStorage.removeItem(`${key}`);
    }
}

export default SectionLocation
