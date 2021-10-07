import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

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

export function login(email, password, loginFunc, errorFunc) {
    auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        loginFunc();
    })
    .catch(error => {
        console.log(error.message);
        errorFunc();
    });
}

export function setLoginUsername(email) {
    global.useremail = email;
}

export function getLoginUsername() {
    return global.useremail;
}

export function logout(navigation) {
    Alert.alert(
        "Logout",
        "Do you really want to logout?",
        [
            {
                text: "Yes",
                onPress: () => {
                    auth().signOut().then(() => {
                        console.log('User logged-out successfully!');
                        setLoginUsername(null);
                        navigation.reset({index: 0, routes: [{ name: 'HomePage' }]})
                    });
                },
            },
            {
                text: "No",
                cancelable: true,
            }
        ],
    );
}
