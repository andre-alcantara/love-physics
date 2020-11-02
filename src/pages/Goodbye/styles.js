import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    background-color: ${props => props.theme.backgroundExit};
    align-items: center; 
    justify-content: center;
`;

export const Container = styled.View `
    align-items: center; 
    justify-content: center;
    margin-top: ${hp('3%')}px;
`;

export const InputView = styled.View `
    width: ${wp('80%')}px;
    margin-top: ${hp('-5%')}px;
    margin-bottom: ${hp('5%')}px;
`;

export const Title = styled.Text `
    font-size: 18px;
    margin-left: -6px;
    color: #FF5555;
    font-family: 'Montserrat_600SemiBold';
    color: ${props => props.theme.title};
`;

export const Name = styled.Text `
    font-size: ${hp('3.5%')}px;
    font-family: 'Montserrat_800ExtraBold';
    margin-bottom: ${hp('55%')}px;
    color: ${props => props.theme.title};
    margin-top: 8px;
`;

export const TextButton = styled.Text `
    background-color: transparent;
    font-size: 18px;
    color: #FFF;
    font-family: 'Montserrat_700Bold';
`;