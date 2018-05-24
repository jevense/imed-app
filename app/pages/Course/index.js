import React from 'react'
import {StackNavigator} from "react-navigation"
import Course from './Course';

export default StackNavigator({
    Course: {
        screen: Course,
    },
}, {
    initialRouteName: 'Course',
});

