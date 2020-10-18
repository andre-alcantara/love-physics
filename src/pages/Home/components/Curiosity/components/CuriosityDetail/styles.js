import styled from 'styled-components';

export const Wrapper = styled.View `
    flex: 1;
`;

export const Header = styled.View `
    align-items: center;
    padding-top: 30px;
    height: 220px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color: #FFF;
    justify-content: center;
`;

export const ImageView = styled.View `
    margin-bottom: 12px;
    width: 90%;
    align-items: center;
`;

export const Name = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 21px;
    margin-bottom: 3px;
    width: 340px;
    margin-left: 14px;
    margin-top: 5px;
    text-align: center;
`; 

export const Life = styled.Text `
    font-family: Montserrat_600SemiBold;
    font-size: 15px;
    color: #808080;
`;

export const Close = styled.TouchableOpacity `
    position: absolute;
    align-self: flex-end;
    align-items: center;
`;

export const Content = styled.ScrollView `
    align-self: center;
    width: 90%;
    padding-bottom: 10px;
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
    margin-top: 20px;
    font-size: 15px;
`;