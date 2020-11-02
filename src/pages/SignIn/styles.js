import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Background = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
`; 

export const Wrapper = styled.SafeAreaView `
    align-self: center;
    width: 100%;
    align-items: center;
    margin-top: -30px;
`;

export const Header = styled.View `
    width: 90%;
    align-self: center;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: ${hp('1%')}px;
    margin-bottom: ${hp('-1%')}px;
`;


export const Description = styled.Text `
    margin-top: 10px;
    font-family: Montserrat_500Medium;
    font-size: 16px;
    color: #808080;
    text-align: center;
`;

export const Label = styled.Text `
    align-self: flex-start;
    margin-left: 5%;
    margin-top: 25px;
    margin-bottom: ${hp('-0.23%')}px;
    font-size: 14px;
    font-family: Montserrat_700Bold;
`;

export const ForgotButton = styled.TouchableOpacity `
    align-self: center;
    margin-top: 20px;
    width: 90%;
`;

export const ForgotText = styled.Text `
    font-family: Montserrat_600SemiBold;
    font-size: 15px; 
    color: #FF5555;
    font-family: Montserrat_700Bold;
    font-size: 15px;
    align-self: flex-end;
`;

export const SignInButton = styled.TouchableOpacity `
    align-self: center;
    align-items: center;
    justify-content: center;
    background-color: #FF5555;
    width: 90%;
    height: 50px;
    margin-top: ${hp('4%')};
    border-radius: 8px;
`;

export const SignInText = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 15px;
    text-align: center;
    color: #FFF;
`;

export const SignUpView = styled.View `
    margin-top: ${hp('4%')}px;
    flex-direction: row;
    align-self: center;
    justify-content: center;
`;

export const SignUpDescription = styled.Text `
    font-family: Montserrat_500Medium;
    font-size: 17px;
`;

export const SignUpButton = styled.TouchableOpacity `
    align-self: center;
    background-color: #FFF;
    width: 90%;
    border-width: 0.3px;
    padding: 11px;
    margin-top: 15px;
    border-radius: 8px;
    flex-direction: row;
`;

export const Icon = styled.TouchableOpacity `
    position: absolute
    
`;

export const SignUpText = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 17px;
    text-align: center;
    margin-left: ${wp('8%')}px;
    color: #000;
`;

    