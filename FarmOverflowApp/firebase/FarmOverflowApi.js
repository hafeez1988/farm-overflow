import firestore from '@react-native-firebase/firestore';

export async function addNewQuestion(farmQuestion, addComplete) {
    console.log('came to the method');
    
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
    const farmQuestionCollection = await firestore().collection('farmoverflow').get();

    farmQuestionCollection.forEach(documentSnapshot => {
        console.log(documentSnapshot);
    });
    
    // Insert data
    /*
    firestore()
    .collection('farmoverflow')
    .add({
        answers: ['sss', 'ddd'],
        createdAt: firestore.FieldValue.serverTimestamp(),
        createdBy: 'tester001',
        question: 'New question for testing'
    })
    .then(() => {
        console.log('Question added!');
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
}