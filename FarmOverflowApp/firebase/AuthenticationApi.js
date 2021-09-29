import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

export function authorizeUser() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    return user;
}

export function createUser(email, password, addCompleteFunc, errorFunc) {
    auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        console.log('User account created!');
        addCompleteFunc();
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }
        console.error(error);
        errorFunc(error);
    });
}
