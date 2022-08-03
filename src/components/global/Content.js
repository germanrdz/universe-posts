import styled from 'styled-components';

const Container = styled.div`
    width: 900px;
    margin: 0 auto;
    padding: 16px;
`;

function Content ({ children }) {
    return (<Container>{children}s</Container>);
};

export default Content;