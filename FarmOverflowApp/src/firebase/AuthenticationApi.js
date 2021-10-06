import auth from '@react-native-firebase/auth';

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
