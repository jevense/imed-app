import 'react-native';
import React from 'react';
// import App from '../app/container/DrawerNavigator';
// Note: test renderer must be required after react-native.

it('renders correctly', () => {
    const abc = (call) => (call) => {
        call()
    };
    const cbd = (dispatch) => ({
        auth: () => dispatch({ok: 'ok'}),
    });
    abc(root);
    // const tree = renderer.create(
    //     <App/>
    // );
});


const abc = (call) => {
    call()
};
const cbd = (dispatch) => ({
    auth: () => dispatch({ok: 'ok'}),
});

function root(...abc) {
    console.log(...abc)
}

abc(root);

((ok)=>(ok1)=>{console.log(ok)})('bc')('cd');
