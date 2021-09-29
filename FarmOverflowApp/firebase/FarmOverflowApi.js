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


    // Insert data
    /*
    
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