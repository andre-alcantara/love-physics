import styled from 'styled-components';

const headerHeight = Platform.OS === 'android' ? 
    120 : 100

const marginTop = Platform.OS === 'android' ? 
    25 : 10     

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    background-color: #9BDCEA;
`;

export const Header = styled.View `
    height: ${headerHeight}px;
    justify-content: center;
    flex-direction: row;
`;

export const TextView = styled.View `
    width: 90%;
    align-self: center;
    justify-content: center;
    margin-top: ${marginTop}px;
`;

export const Title = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: 25px;
`;

export const Icon = styled.TouchableOpacity `
    align-self: flex-end;
    position: absolute;
`;

