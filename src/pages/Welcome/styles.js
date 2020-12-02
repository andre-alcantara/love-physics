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
    margin-top: 6px;
    height: 90%;
    background-color: #FFF;
`;

export const Slide = styled.View `
    
   
`;

export const Title = styled.Text `
    margin-bottom: ${hp('2%')}px;
    font-size: 26px;
    margin-left: 24px;
    font-family: Montserrat_700Bold;
`;

export const SubTitle = styled.Text `
    font-family: Montserrat_500Medium;
    font-size: 18px;
    margin-left: 24px;
    margin-bottom: ${hp('5%')}px;
    color: #2E2E2E;
`;

export const SignInButton = styled.TouchableOpacity `
    margin-top: ${hp('5%')};
    margin-bottom: ${hp('-6%')};
    background-color: #FF5555;
    width: 60%;
    border-radius: 15px;
    align-self: center
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