import styled from 'styled-components';

export const Content = styled.ScrollView.attrs(props => ({
    contentContainerStyle: { 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingRight: 18,
    }})) 
    `
        flex: 1;
        
    `;

export const Difficulty = styled.View `
    padding: 7px;
    width: 140px;
    border-radius: 9px;
`;

export const DifficultyText = styled.Text `
    font-family: Montserrat_600SemiBold;
    color: #FFF;
    text-align: center;
`;

export const Card = styled.View `
    width: 310px;
    height: 90%;
    background-color: ${props => props.theme.background};
    margin-left: 18px;
    border-radius: 20px;
    padding-top: 15px;
    padding-left: 20px;
`;

export const SubTitle = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 24px;
    margin-top: 18px;
    color: ${props => props.theme.title};
`;

export const Description = styled.Text `
    color: ${props => props.theme.title};
    font-size: 16px;
    font-family: Montserrat_500Medium;
`;

export const DescriptionScroll = styled.ScrollView.attrs(props => ({
    contentContainerStyle: { 
        paddingRight: 12,
        paddingBottom: 20,
    }})) 
    `
        padding-top: 9px;
        padding-left: 12px;
        
        margin-top: 12px;
        width: 93%;
        border-radius: 8px;
        height: 100px;
        background-color: ${props => props.theme.description};
    `; 
   


export const MaterialText = styled.Text `
    font-size: 14px;
    font-family: Montserrat_600SemiBold;
    color: #FF5555;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Material = styled.View `
    flex-direction: row;
    margin-bottom: 20px;
`;

export const Videos = styled.TouchableOpacity `
    height: 110;
    width: 130;
    background-color: #F8EFEF;
    border-radius: 8px;
    align-items: center;   
    justify-content: center; 
`;

export const Quiz = styled.TouchableOpacity `
    height: 110;
    width: 130;
    background-color: #FF5555;
    margin-left: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;