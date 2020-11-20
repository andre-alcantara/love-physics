import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Top = styled.SafeAreaView `
    background-color: ${props => props.theme.background};
    height: 30%;
    border-bottom-width: 1;
    border-bottom-color: ${props => props.theme.divisor};
`;

export const HeaderView = styled.View `
    flex-direction: row;
    align-self: center;
    width: 90%;
    margin-top: 10px;
`;

export const TextView = styled.View `
    background-color: ${props => props.theme.background};
    justify-content: center;
    align-content: flex-start;
    width: 78%;
    margin-bottom: 30px;
`;

export const StarView = styled.View `
    margin-left: 10px;
    background-color: #FF5555; 
    align-content: flex-start;
    height: 70%;
    width: 130px;
    justify-content: center;
    padding-left: 10px;
    border-radius: 12px;
`;

export const PrimaryText = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: 28px;
    margin-top: 8px;
    color: ${props => props.theme.title};
`;

export const SecondaryText = styled.Text `
    font-family: Montserrat_500Medium;
    font-size: 20px;
    color: ${props => props.theme.title};
`;

export const StarCount = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 18.3px;
    position: absolute;
    margin-left: 10px;
    color: #FFF;
    text-align: center;
`;

export const HeartView = styled.View `
    background-color: #FF5555; 
    align-content: flex-start;
    height: ${hp('7%')};
    width: ${wp('32%')};
    justify-content: center;
    padding-left: 12px;
    border-radius: 12px;
    margin-left: ${wp('2%')};
`;

export const HeartCount = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 18.3px;
    position: absolute;
    width: 55px;
    margin-left: 60px;
    color: #FFF;
    text-align: center;
`;

export const StatsView = styled.View `
    flex-direction: row;
   
    
    margin-top:-2px;
`;

