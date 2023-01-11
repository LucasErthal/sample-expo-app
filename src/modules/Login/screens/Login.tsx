import React, { useRef, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { VStack, HStack, Flex } from 'react-native-flex-layout';
import InputLogin, { InputLoginRefProps } from '../components/InputLogin';
import { Feather } from '@expo/vector-icons'

 const Login = () => {
  const [email, setEmail] = useState<string>('')
  const passwordRef = useRef<InputLoginRefProps>(null)
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{ flex: 1, marginTop: 48 }} behavior="padding">
        <VStack mt={60} center ph={24}>
          <Text style={{fontSize: 48}}>Logo</Text>
        </VStack>
        <VStack spacing={16} mt={48} center ph={24}>
          <Flex w={'100%'}>
            <InputLogin
              keyboardType='email-address'
              onChangeText={(value) => setEmail(value)}
              autoCapitalize={'none'}
              placeholder="Usuário"
              returnKeyType='next'
              blurOnSubmit={false}
              onSubmitEditing={() => {
                passwordRef.current?.focus()

              }}
            />
            </Flex>

            <Flex w={'100%'}>
              <InputLogin
                ref={passwordRef}
                placeholder="Senha"
                secureTextEntry={!showPassword}
                onChangeText={(value) => setPassword(value)}
                autoCapitalize={'none'}
                trailing={
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setShowPassword((prevState) => !prevState)}
                  >
                    <Feather
                      name={showPassword ? 'eye-off' : 'eye'}
                      size={24}
                      color="#A8B0B5"
                    />
                  </TouchableOpacity>
                }
                onSubmitEditing={() =>{}}
              />
            </Flex>
            
            <Flex w={'100%'} mt={48}>
              <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={() => {}}
                style={{borderRadius:8, borderWidth: 1.5, height: 56}}
              >
              <Flex fill center radius={8}>
                <Text
                    style={{
                      color: '#000',
                      fontSize: 18,
                    }}
                  >
                    Entrar
                </Text>
              </Flex>
            </TouchableOpacity>
          </Flex>
        </VStack>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
export default Login
