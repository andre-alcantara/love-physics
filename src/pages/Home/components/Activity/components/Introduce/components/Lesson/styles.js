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
    width: 300px;
    height: 87%;
    background-color: #FFF;
    margin-left: 18px;
    border-radius: 20px;
    padding-top: 15px;
    padding-left: 20px;
`;

export const SubTitle = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 24px;
    margin-top: 18px;
`;

export const Description = styled.Text `
    width: 92%;
    margin-top: 12px;
    font-size: 16px;
    font-family: Montserrat_500Medium;
`;