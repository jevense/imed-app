import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

const SectionLocation = new Storage({
    storageBackend: AsyncStorage,
    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: null,
});

export default SectionLocation;
