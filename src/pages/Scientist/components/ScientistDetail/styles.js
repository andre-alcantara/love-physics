import styled from 'styled-components';

export const Wrapper = styled.View `
    flex: 1;
`;

export const Header = styled.View `
    align-items: center;
    padding-top: 30px;
    height: 250px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color: #FFF;
    justify-content: center;
`;

export const ImageView = styled.View `
    margin-bottom: 10px;
    width: 90%;
    align-items: center;
`;

export const Name = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: 25px;
    margin-bottom: 3px;
`; 

export const Life = styled.Text `
    font-family: Montserrat_600SemiBold;
    font-size: 15px;
    color: #808080;
`;

export const Close = styled.TouchableOpacity `
    position: absolute;
    align-self: flex-end;
`;

export const Content = styled.ScrollView `
    align-self: center;
    width: 90%;
    
`;

export const Title = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 21px;
    margin-top: 20px;
    margin-left: -6px;
    margin-bottom: 8px;
`;

export const Detail = styled.Text `
    font-family: Montserrat_500Medium;
    font-size: 15px;
`;
