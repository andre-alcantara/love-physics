import styled from 'styled-components';

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    background-color: ${props => props.theme.background};
`;

export const ExitButton = styled.TouchableOpacity `

`;

export const StarContainer = styled.View `
    background-color: #FF5555;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    height: 50px;
    border-radius: 6px;
`;

export const StarCount = styled.Text `
    color: #FFC107;
    font-family: Montserrat_700Bold;
    font-size: 20px;
    margin-left: 20px;
    margin-right: 10px;
`;

export const QuestionView = styled.View `
    background-color: ${props => props.theme.description};
    margin-top: 20px;
    height: 30%;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-right: 15px;
`;

export const Question = styled.Text `
    font-size: 20px;
    font-family: Montserrat_600SemiBold;
`;

export const AnswersView = styled.TouchableOpacity `
    height: 50px;
    width: 90%;
    margin-top: 15px;
    border-width: 2px;
    border-color: #A9A9A9;
    align-self: center;
    border-radius: 8px;
    justify-content: center;
    padding-left: 15px;
`;

export const Answer = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 20px;
`;

export const List = styled.FlatList `

`;