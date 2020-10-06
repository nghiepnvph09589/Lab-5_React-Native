import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();


  // Sinh viên xây dựng ứng dụng đăng kí thông tin người dùng với
  // 4 ô nhập name, email, gender, status
  // nếu code trả về là 201 thì thông báo đã đăng kí thành công
  // còn code 422 thì thông báo email đã tồn tại
  // trường hợp còn lại thông báo lỗi

  function a(name, email, gender, status) {
    const data = {
      id: 1,
      name: name,
      email: email,
      gender: gender,
      status: status
    }
    fetch('https://gorest.co.in/public-api/users', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer a9fa0b80b1a3ba1414d1bf52b54fd5bc54e18f0476c9ff985972fe526b768eaa'
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.code == 422) {
          alert('Email đã tồn tại!')
        }
        else if (data.code == 201) {
          alert('Đăng kí thành công!')
        }
        // alert(data.code)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <View style={styles.container}>
        
      <View style={{ alignContent: 'center', alignItems: 'center' }}>
      
        <View>
          <Text style={{ marginTop: 10, marginRight: 100, fontSize: 18, }}>UserName</Text>
          <TextInput
            style={{ backgroundColor: '#fff', marginTop: 5, height: 45, width: 350, }}
            onChangeText={text => setUser(text)}
          />
        </View>
        <View>
          <Text style={{ marginTop: 15, fontSize: 18, }}>Email</Text>
          <TextInput
            style={{ backgroundColor: '#fff', marginTop: 5, height: 45, width: 350, borderColor: '#0066FF', }}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View>
          <Text style={{ marginTop: 15, fontSize: 18, }}>Gender</Text>
          <TextInput
            style={{ backgroundColor: '#fff', marginTop: 5, height: 45, width: 350, borderColor: '#0066FF', }}
            onChangeText={text => setGender(text)}
          />
        </View>
        <View>
          <Text style={{ marginTop: 15, fontSize: 18, }}>Status</Text>
          <TextInput
            style={{ backgroundColor: '#fff', marginTop: 5, height: 45, width: 350, borderColor: '#0066FF', }}
            onChangeText={text => setStatus(text)}
          />
        </View>
      </View>
      <View style={{ marginTop: 80, width: 350, height: 45, }}>
        <Button color='green' title='Đăng ký'
          onPress={() => {
            // alert(email)
            a(user, email, gender, status)
          }
          } />
      </View>
      <View style={{ marginTop: 20, }}>
        <Text>CANCEL</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  }
})