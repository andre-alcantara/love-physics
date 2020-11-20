import styled from 'styled-components';

export const Wrapper = styled.View `
    flex: 1;
    background-color: ${props => props.theme.background};
    
`;

export const Header = styled.View `
    align-items: center;
    padding-top: 30px;
    height: 250px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: ${props => props.theme.bottomTab};
    justify-content: center;
`;

export const ImageView = styled.View `
    margin-top: -40px;
    margin-bottom: 40px;
    width: 90%;
    align-items: center;
`;

export const Name = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: 23px;
    width: 170px;
    margin-bottom: 8px;
    color: ${props => props.theme.title};
`; 

export const Life = styled.Text `
    font-family: Montserrat_600SemiBold;
    font-size: 16px;
    color: ${props => props.theme.secondaryText};
`;

export const Close = styled.TouchableOpacity `
    position: absolute;
    align-self: flex-end;
`;

export const Content = styled.ScrollView `
    align-self: center;
    width: 90%;
    height: 100%;
    margin-bottom: 10px;
`;

export const Title = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 19px;
    margin-top: 20px;
    margin-bottom: 8px;
    color: ${props => props.theme.title};
`;

export const Detail = styled.Text `
    font-family: Montserrat_500Medium;
    font-size: 15px;
    color: ${props => props.theme.title};
`;

export const TitleView = styled.View `
    flex-direction: row;
    width: 90%;
    align-items: center;
    justify-content: center
`;

export const InfoView = styled.View `
    margin-left: 20px
`;