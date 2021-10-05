'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    scrollView: {
        marginHorizontal: 20,
        width:'100%',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
    inputStyle: {
        flex: 1,
        color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 30,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#008080',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 30,
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 12,
    },
    textArea: {
        height: '70%', 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    signedUserTextStyle: {
        textAlign: 'right',
        fontSize: 10,
        width: '100%',
    },
    answerButtonStyle: {
        borderWidth: 1,
        backgroundColor: '#B6B6B4',
        borderColor: '#7DE24E',
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '50%',
        alignSelf: 'center',
    },
    answerButtonTextStyle: {
        color: 'black',
        fontSize: 12,
    },
    answerTextArea: {
        height: '50%', 
        width: '90%',
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    IconImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    mainmenuButtonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 1,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 150,
        width: 150,
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
    },
    mainmenuButtonTextStyle: {
        color: '#023B0E',
        paddingVertical: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
    mainmenuIconImageStyle: {
        marginTop: 25,
        height: 80,
        width: 80,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
});
