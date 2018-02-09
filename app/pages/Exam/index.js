import React from 'react'
import {StackNavigator} from "react-navigation";
import Exam from './Exam';

export default StackNavigator({
    Exam: {
        screen: Exam,
    },
}, {
    initialRouteName: 'Exam',
});

