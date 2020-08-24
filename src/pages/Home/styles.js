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

