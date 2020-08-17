import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    justify-content: center; 
    align-items: center; 
    background-color: #FFF;
`;

export const Container = styled.View `
    width: ${wp('100%')}px;
    height: ${hp('70%')}px;
    margin-top: ${hp('-15%')}px;
    background-color: #FFF;
`;

export const Slide = styled.View `
    height: 65%; 
    margin-top: ${hp('6%')}px;
`;

export const Title = styled.Text `
    text-align: center;
    margin-bottom: ${hp('4%')}px;
    font-size: ${hp('5%')}px;
    font-family: Montserrat_700Bold;
`;

export const SignInButton = styled.TouchableOpacity `
    margin-top: ${hp('6%')};
    margin-bottom: ${hp('-6%')};
    background-color: #FF5555;
    width: 60%;
    border-radius: 15px;
`;

export const SignInText = styled.Text `
    font-size: 16px;
    padding: 15px;
    text-align: center;
    color: #FFF;
    font-family: Montserrat_600SemiBold;
`;

export const SignUpButton = styled.TouchableOpacity `
    margin-top: ${hp('7%')};
    margin-bottom: ${hp('-7%')};
    background-color: #FFF;
    width: 60%;
    border-radius: 15px;
    border-width: 2px;
    border-color: #FF5555; 
`;

export const SignUpText = styled.Text `
    font-size: 16px;
    padding: 13px;
    color: #FF5555;
    text-align: center;
    font-family: Montserrat_600SemiBold;
`;