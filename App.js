import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CKOScreen, ConfirmationScreen} from "./screens";
import {TitleLogo} from "./logos";
import {Text, View} from "react-native";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CKO">
                <Stack.Screen
                    name="CKO"
                    component={CKOScreen}
                    options={(props) => ({
                        headerTitle: () => <TitleLogo/>,
                        headerRight: () => (
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20}}>
                                <Text>CKO</Text>
                            </View>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Confirmation"
                    component={ConfirmationScreen}
                    options={(props) => ({
                        headerTitle: () => <TitleLogo/>,
                        headerRight: () => (
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20}}>
                                <Text>Confirmation</Text>
                            </View>
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;