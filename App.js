import { StatusBar } from 'expo-status-bar';
import {useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput ,SafeAreaView,Button,TouchableOpacity} from 'react-native';

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!  Satyam</Text>
  //     <Header/>
  //     <Login/>
    
  //     <StatusBar style="auto" />
  //   </View>
  // );
  const [username, setName] = useState('');
  const [password, setEmail] = useState('');
  const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
  
    // Trigger form validation when name, 
    // email, or password changes
    validateForm();
}, [username, password]);
const validateForm = () => {
  let errors = {};

  // Validate name field
  if (!username) {
      errors.username = 'username is required.';
  }


  // Validate password field
  if (!password) {
      errors.password = 'Password is required.';
  } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
  }

  // Set the errors and update form validity
  setErrors(errors);
  setIsFormValid(Object.keys(errors).length === 0);
};

const handleSubmit = () => {
  if (isFormValid) {
debugger
      // Form is valid, perform the submission logic
      console.log('Form submitted successfully!');
  } else {
        
      // Form is invalid, display error messages
      console.log('Form has errors. Please correct them.');
  }
};
  return (
    // <View>
    //   <Text>Login</Text>
    //   <TextInput>User Name:</TextInput>

    //   <TextInput>Password:</TextInput>
    // </View>
    
        <View style={styles.container}>
          <Text style={styles.Heading}> Bai-Khata</Text>
            <TextInput placeholder="enter Username"
                value={username}
                onChangeText={setName}
               // onChangeText={(text) => setMessage(text)}
                //onSubmitEditing={() => alert(`Welcome to ${message}`)}
            />
 
           <TextInput
          
                placeholder="enter your Password"
                value={password}
                onChangeText={setEmail}
               // onChangeText={(text) => setMessage(text)}
                //onSubmitEditing={() => alert(`Welcome to ${message}`)}
            />
             <TouchableOpacity
                style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
                disabled={!isFormValid}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Submit</Text>
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
  button: {
      backgroundColor: 'green',
      borderRadius: 8,
      paddingVertical: 10,
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 12,
  },
  buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
  },
  error: {
      color: 'red',
      fontSize: 20,
      marginBottom: 12,
  },
  Heading:{
    alignItems: 'center',
    color:'green',
   // fontWeight: 'bold',
    fontSize: 30,
  }
});


