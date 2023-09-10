import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { StyleSheet,Pressable,Modal, Text, View, TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';

function HomeScreen() {
    const navigation = useNavigation();
    const [username, setName] = useState('');
    const [password, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const onBtnPress = () => {
     
        // Navigate to AnotherScreen and pass a value as a route parameter
        
    };
    useEffect(() => {
        validateForm();
    }, [username, password]);
    const validateForm = () => {
        let errors = {};
        if (!username) {
            errors.username = 'Username is Required.';
        }
        if (!password) {
            errors.password = 'Password is Required.';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const handleSubmit = () => {
        if (isFormValid) {
            if(username=="Admin123" && password=="Test@1234"){
                navigation.navigate('List', { someValue: "Hello from Home!" })
            }
            else{
                setModalVisible(true);
            }
        } else {
            console.log('Form has errors. Please correct them.');
        }
    };
    return (
        <View style={styles.container}>
             <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Invalid Credentials</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Try Again</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
            <Text style={styles.Heading}>Bahi-Khata</Text>
            <View style={styles.Textbox}>
                <TextInput placeholder="Enter Username"
                    value={username}
                    onChangeText={setName}
                />
            </View>
            <View style={styles.Textbox}>
                <TextInput
                    placeholder="Enter your Password"
                    value={password}
                    onChangeText={setEmail}
                />
            </View>
            <TouchableOpacity
                style={{ opacity: isFormValid ? 1 : 0.5 }}
                disabled={!isFormValid}
                onPress={handleSubmit}>
                    <Text>Submit</Text>
                {/* <View>
                    <Button title="" onPress={onBtnPress}></Button>
                </View> */}

            </TouchableOpacity>

            {/* Display error messages */}
            {Object.values(errors).map((error, index) => (
                <Text key={index} style={styles.error}>
                    {error}
                </Text>
            ))}
        </View>


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    input: {
        height: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 16,
    },
    // button: {
    //     backgroundColor: 'green',
    //     borderRadius: 8,
    //     paddingVertical: 10,
    //     alignItems: 'center',
    //     marginTop: 16,
    //     marginBottom: 12,
    // },
    
    error: {
        color: 'red',
        fontSize: 20,
        marginBottom: 12,
    },
    Heading: {
        marginLeft: 100,
        color: 'green',
        fontSize: 30,
    },
    Textbox: {
        margin: 4,
        padding: 5,
        marginTop: 10
    },
    
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:'red',
    fontSize:20,

  },
  buttonClose: {
    width:200,
    color:'green',
    backgroundColor: 'green',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;