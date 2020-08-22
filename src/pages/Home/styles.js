import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const Wrapper = styled.View `
    flex: 1;
    background: #FFF;
    
`;

export const Container = styled.View `
    flex: 1;
    align-self: center;
    width: 100%;

`;

export const Header = styled.View `
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


export const Divisor = styled.View `
    height: 22px;
    width: 2px;
    background-color: #fff;
    margin-left: ${wp('13%')};
    position: absolute;
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

export const HeaderDivisor= styled.View `
    border-bottom-width: 1px;
    border-color: #E1DEDE;
    width: 100%;
    height: 50px;
    position: absolute;
    margin-top: ${hp('4%')};
`;

export const Top = styled.View `
    background-color: #fff;
    height: ${hp('28%')};
`;

export const Content = styled.ScrollView `
    width: 100%;
    align-self: flex-end;
`;

export const Title = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 25px;
    margin-top: ${hp('1.8%')};
    margin-left: ${wp('6%')};
`;

export const Activities = styled.ScrollView `
    width: 100%;
    flex-direction: row;
    margin-top: 5px;
    
`;

export const ScientistCard = styled.View `
    width: 90%;
    height: 180px;
    background-color: #FFF;
    align-self: center;
    margin-bottom: 15px;
    margin-top: 12px;
    border-radius: 20px;
`;

export const CuriosityCard = styled.View `
    width: 160px;
    height: 175px;
    background-color: #FFF;
    align-self: center;
    margin-bottom: 15px;
    margin-top: 10px;
    border-radius: 20px;
    margin-left: 15px;
`;