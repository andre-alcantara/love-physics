import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Activities = styled.View `
    height: 300;
    flex-direction: row;
    margin-top: 10px;
    
`;

export const ActivitiesText = styled.Text `
    color: #FFF;
    width: 100%;
    position: absolute;
    margin-top: 155px;
    margin-left: 25px;
    font-family: Montserrat_700Bold;
    font-size: 26px;
`;

export const StartButton = styled.TouchableOpacity `
    background-color: #FF5555;
    flex-direction: row;
    position: absolute;
    margin-left: 25px;
    margin-top: 210px;
    padding: 10px;
    border-radius: 20px;
    align-items: center;
`;

export const StartText = styled.Text `
    color: #FFF;
    font-family: Montserrat_900Black;
    font-size: 18px;
`;