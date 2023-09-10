import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, TouchableOpacity } from 'react-native';

function HomeScreen() {
    const navigation = useNavigation();
    const [username, setName] = useState('');
    const [password, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const onBtnPress = () => {
        // Navigate to AnotherScreen and pass a value as a route parameter
        navigation.navigate('List', { someValue: "Hello from Home!" })
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
            console.log('Form submitted successfully!');
        } else {
            console.log('Form has errors. Please correct them.');
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.Heading}>Bai-Khata</Text>
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
                <View>
                    <Button title="Submit" onPress={onBtnPress}></Button>
                </View>

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
    }
});

export default HomeScreen;