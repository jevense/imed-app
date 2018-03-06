import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

const host = 'http://192.168.8.144:8080/imed';

export const storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    // size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    // defaultExpires: 1000 * 3600 * 24,
    defaultExpires: null,

    // 读写时在内存中缓存数据。默认启用。
    // enableCache: true,

    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync方法，无缝返回最新数据。
    // sync方法的具体说明会在后文提到
    // 你可以在构造函数这里就写好sync的方法
    // 或是在任何时候，直接对storage.sync进行赋值修改
    // 或是写到另一个文件里，这里require引入
    sync: {
        // sync方法的名字必须和所存数据的key完全相同
        // 方法接受的参数为一整个object，所有参数从object中解构取出
        // 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
        books(params) {
            let {id, resolve, reject, syncParams: {extraFetchOptions, someFlag}} = params;
            fetch(`${host}/book.json`).then(response => {
                return response.json();
            }).then(json => {
                if (json && json.books) {
                    let books = json.books.map(item => {
                        let {id: key = "", name: title = "", edition: editor = "", size = "", cover} = item;
                        let image = cover ? {url: cover.replace('http://', 'https://')} : require('../../assets/cover/maga-cover.jpg');
                        return {key, title, editor, size, image}
                    });
                    storage.save({
                        key: 'books',
                        data: books,
                    });
                    // 成功则调用resolve
                    resolve && resolve(books);
                } else {
                    // 失败则调用reject
                    reject && reject(new Error('data parse error'));
                }
            }).catch(err => {
                console.warn(err);
                reject && reject(err);
            });
        },

        chapter(params) {
            let {id, resolve, reject, syncParams: {extraFetchOptions, someFlag}} = params;
            fetch(`${host}/book/${id}/chapter.json`).then(response => {
                return response.json();
            }).then(json => {
                if (json && json['chapters'] && json['chapters']['chapters']) {
                    let chapter = json['chapters']['chapters'].map(item => {
                        let {id = "", name: title = "", icon = "", sections: data = []} = item;
                        return {id, title, data,}
                    });
                    storage.save({
                        key: 'chapter',
                        id: id,
                        data: chapter,
                    });
                    // 成功则调用resolve
                    resolve && resolve(chapter);
                } else {
                    // 失败则调用reject
                    reject && reject(new Error('data parse error'));
                }
            }).catch(err => {
                console.warn(err);
                reject && reject(err);
            });
        },

        section(params) {
            let {id, resolve, reject, syncParams: {extraFetchOptions, someFlag}} = params;
            fetch(`${host}/book/1/chapter/1/section/${id}.json`).then(response => {
                return response.json();
            }).then(json => {
                let section = json['section'];
                if (json && json['section']) {
                    storage.save({
                        key: 'section',
                        id: id,
                        data: section,
                    });
                    // 成功则调用resolve
                    resolve && resolve(section);
                } else {
                    // 失败则调用reject
                    reject && reject(new Error('data parse error'));
                }
            }).catch(err => {
                console.warn(err);
                reject && reject(err);
            });
        }
    }

});
