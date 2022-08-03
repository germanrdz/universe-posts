import styled from 'styled-components';

const Container = styled.div`
    padding: 2em;
    background-color: #FFF;
    border-radius: 1em;
`;

function Card ({ children }) {
    return (
        <Container>{children}</Container>
    );
}

export default Card;