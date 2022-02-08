import styled from 'styled-components';
import { Container } from './Container';

const Wrapper = styled.main`
padding: 2rem 0;

@nedia(min-width: 767px) {
    padding: 4rem 0;
}
`

export const Main = ({ children }) => {
    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    );
};