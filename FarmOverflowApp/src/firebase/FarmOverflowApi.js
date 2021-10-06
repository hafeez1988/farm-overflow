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
    firestore().collection(collectionName).orderBy("createdAt", "desc").onSnapshot(querySnapshot => {
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

export async function getQuestionsByUser(obj, createdBy) {
    console.log(`Retrieving all farming questions added by ${createdBy}`);
    firestore().collection(collectionName).where('createdBy', '==', createdBy).onSnapshot(querySnapshot => {
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

export async function addAnswerById(recordId, answer) {
    console.log(`Adding answer to ${recordId}`);
    firestore().collection(collectionName).doc(recordId).set(
        {
            answers: firestore.FieldValue.arrayUnion(answer),
        },
        {merge: true},
    )
    .then(() => {
        console.log(`Answer added successfully for ${recordId}`);
    })
    .catch(error => {
        console.error(error);
    });
}

export async function deleteById(recordId) {
    firestore()
        .collection(collectionName)
        .doc(recordId)
        .delete()
        .then(() => {
            console.log(`Farming question ${recordId} was deleted`);
        });
}
