import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Background = styled.SafeAreaView `
    flex: 1;
    background-color: #FFF;
`; 

export const Wrapper = styled.SafeAreaView `
    align-self: center;
    width: 100%;
    margin-top: -30px;
`;

export const Header = styled.View `
    width: 90%;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
    justify-content: flex-end;
    margin-top: ${hp('1%')}px;
    margin-bottom: ${hp('-1%')}px;
`;

export const Title = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: ${hp('3.5%')}px;
    text-align: center;
    margin-top: ${hp('4.3%')}px;
`;

export const Description = styled.Text `
    margin-top: ${hp('2.3%')}px;
    font-family: Montserrat_500Medium;
    font-size: ${hp('2.3%')}px;
    color: #808080;
    text-align: center;
`;

export const Label = styled.Text `
    align-self: flex-start;
    margin-left: 5%;
    margin-top: ${hp('3.5%')}px;
    margin-bottom: ${hp('-0.23%')}px;
    font-size: ${hp('1.7%')}px;
    font-family: Montserrat_700Bold;
`;

export const ForgotButton = styled.TouchableOpacity `
    align-self: flex-end;
    margin-top: ${hp('1.6%')};
    margin-right: ${wp('2.2%')};
`;

export const ForgotText = styled.Text `
    font-family: Montserrat_600SemiBold;
    font-size: ${hp('2%')}px; 
    color: #FF5555;
`;

export const SignInButton = styled.TouchableOpacity `
    align-self: center;
    background-color: #FF5555;
    width: 90%;
    padding: 12px;
    margin-top: ${hp('4%')};
    border-radius: 15px;
`;

export const SignInText = styled.Text `
    font-family: Montserrat_600SemiBold;
    font-size: ${hp('2%')}px;
    text-align: center;
    color: #FFF;
`;

export const SignUpView = styled.View `
    margin-top: ${hp('4%')}px;
    flex-direction: row;
    align-self: center;
`;

export const SignUpDescription = styled.Text `
    font-family: Montserrat_500Medium;
    font-size: ${hp('2%')}px;
`;

export const SignUpButton = styled.TouchableOpacity `
    align-self: center;
    background-color: #FFF;
    width: 90%;
    padding: 11px;
    margin-top: ${hp('1.3%')};
    border-radius: 15px;
    flex-direction: row;
`;

export const SignUpText = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: ${hp('2%')}px;
    text-align: center;
    margin-left: ${wp('8%')}px;
    color: #000;
`;

    