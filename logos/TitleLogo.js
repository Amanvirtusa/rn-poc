import React from "react";
import {Image} from "react-native";

export function TitleLogo() {
    return (
        <Image
            style={{width: 50, height: 50}}
            source={require('../assets/Verint.png')}
        />
    );
}
