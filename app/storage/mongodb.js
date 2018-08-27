import Datastore from 'react-native-local-mongodb'
import book from './book'
import chapter from './chapter'

export const bookList = new Datastore({filename: 'bookList', autoload: true});
export const chapterList = new Datastore({filename: 'chapterList', autoload: true});


// bookList.loadDatabase(function (err) {    // Callback is optional
//     bookList.insert(book, (err, newDoc) => {
//         console.log(newDoc)
//     });
// });
//
// chapterList.loadDatabase(function (err) {    // Callback is optional
//     chapterList.insert(chapter, (err, newDoc) => {
//         console.log(newDoc)
//     });
// });

bookList.count({}, function (err, count) {
    !count && bookList.insert(book, (err, newDoc) => {
        console.log(newDoc)
    });
});

chapterList.count({}, function (err, count) {
    !count && chapterList.insert(chapter, (err, newDoc) => {
        console.log(newDoc)
    });
});

// export {
//     bookList,
//     chapterList
// }
