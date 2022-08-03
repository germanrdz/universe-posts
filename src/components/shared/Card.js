import styled from 'styled-components';

const Container = styled.div`
    padding: 32px;
    background-color: #FFF;
    border-radius: 16px;
`;

function Card ({ children }) {
    return (
        <Container>{children}</Container>
    );
}

export default Card;