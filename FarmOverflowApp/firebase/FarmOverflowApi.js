import firestore from '@react-native-firebase/firestore';

const collectionName = 'farmoverflow';

export async function addNewQuestion(farmQuestion, addCompleteFunc) {
    console.log('Adding a new farming question');
    firestore().collection(collectionName).add({
        answers: [],
        createdAt: firestore.FieldValue.serverTimestamp(),
        createdBy: farmQuestion.user,
        question: farmQuestion.question
    })
    .then(() => {
        console.log('New farming question added!');
        addCompleteFunc();
    });
}

export async function getAllQuestions(obj) {
    console.log('Retrieving all farming questions');
    firestore().collection(collectionName).onSnapshot(querySnapshot => {
        const questions = [];
        let number = 0;

        querySnapshot.forEach(documentSnapshot => {
            questions.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
                index: ++number,
            });
        });

        obj.setState({data: questions});
        obj.arrayholder=questions;
    });
}

// Updating data
    /*
    firestore()
    .collection('farmoverflow')
    .doc('8mgWyEL0hRFtm0GXadQk')
    .update({
        question: "ssssdsdsdsddsd",
        answers: ["ohh", "ttt"]
    })
    .then(() => {
        console.log('User updated!');
    });
    */

    // Reading data
    /*
    const farmQuestionCollection = await firestore().collection('farmoverflow').get();

    farmQuestionCollection.forEach(documentSnapshot => {
        console.log(documentSnapshot);
    });
    */

    // Delete data
    /*
    firestore()
    .collection('farmoverflow')
    .doc('8mgWyEL0hRFtm0GXadQk')
    .delete()
    .then(() => {
        console.log('User deleted!');
    });
    */