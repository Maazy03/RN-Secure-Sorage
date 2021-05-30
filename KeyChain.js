import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
// import * as Keychain from 'react-native-keychain';
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage'


const KeyChain = () => {

useEffect(() => {
saveData()    
}, [])

async function saveData (){
    const config = {
        accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
        authenticationPrompt: 'auth with yourself',
        service: 'example',
        authenticateType: AUTHENTICATION_TYPE.BIOMETRICS,
      }
      const key = 'someKey'
    //   await SecureStorage.setItem(key, 'some value', config)
    try {
        const got = await SecureStorage.getItem(key, config)
        console.log("S+VALUE---",got)
        
    } catch (error) {
        
        console.log("ERRROR",error)
    }

}

    
    return (
        <View>
            <Text>HELLO222</Text>
        </View>
    )
}

export default KeyChain
