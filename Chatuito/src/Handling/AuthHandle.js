import {ToastAndroid} from "react-native";

export function _showToastErrorOrNotthing(text){
    ToastAndroid.showWithGravityAndOffset(
        text,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        10,
        30
    );
}
export function _showToastSuccessFail(text) {
    ToastAndroid.showWithGravityAndOffset(
        text,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        10,
        30
    );
}

export  function  _validateEmail(text){

    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
        console.log("Email is Not Correct");
        _showToastErrorOrNotthing('Email is Not Correct');
        return false;
    }
    else return true;
}
