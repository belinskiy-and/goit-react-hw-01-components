import styled from "styled-components";

export const Section = styled.section`
    width: ${p => p.theme.sizes[4]}px;
    margin: ${p => p.theme.space[0]}px auto;
`;

export const List = styled.ul`
    padding: ${p => p.theme.space[0]}px;
    margin: ${p => p.theme.space[0]}px;
`;
