import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Top = styled.View `
    background-color: #fff;
    height: ${hp('28%')};
`;

export const HeaderView = styled.View `
    flex-direction: row;
    align-self: center;
    width: 90%;
    align-items: stretch;
    margin-top: 12px;
`;

export const TextView = styled.View `
    background-color: #FFF;
    justify-content: center;
    align-content: flex-start;
    width: 78%;
`;

export const StarView = styled.View `
    margin-left: ${wp('5%')};
    background-color: #FFC107; 
    align-content: flex-start;
    height: 7%;
    width: 32%;
    justify-content: center;
    padding-left: 10px;
    border-radius: 12px;
`;

export const PrimaryText = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: 28px;
    margin-top: ${hp('1.3%')};
`;

export const SecondaryText = styled.Text `
    font-family: Montserrat_500Medium;
    font-size: 20px;
    
`;

export const StarCount = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 18.3px;
    position: absolute;
    margin-left: ${wp('16%')};
    color: #FFF;
    text-align: center;
`;

export const HeartView = styled.View `
    background-color: #FF5555; 
    align-content: flex-start;
    height: 7%;
    width: 32%;
    justify-content: center;
    padding-left: 10px;
    border-radius: 12px;
    margin-left: ${wp('2%')};
`;

export const HeartCount = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 18.3px;
    position: absolute;
    margin-left: ${wp('19%')};
    color: #FFF;
    text-align: center;
`;

export const StatsView = styled.View `
    flex-direction: row;
    height: 350%;
    margin-top: ${hp('-2.4%')};
`;

