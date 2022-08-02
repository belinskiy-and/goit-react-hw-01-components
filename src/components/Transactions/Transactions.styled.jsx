import styled from "styled-components";


export const Table = styled.table`
    width: ${p => p.theme.sizes[6]}px;
    margin: ${p => p.theme.space[6]}px auto;
    box-shadow: ${p => p.theme.shadows.main};
    border: none;
`;

export const TrHead = styled.tr`
    background-color: ${p => p.theme.colors.tableHead};
    color: ${p => p.theme.colors.textTableFirst};
    text-transform: uppercase;
    font-size: ${p => p.theme.fontSizes.xs};
    height: ${p => p.theme.sizes[7]}px;
`;

export const TrTable = styled.tr`
    height: ${p => p.theme.sizes[7]}px;
    background-color: ${p => p.theme.colors.backgroundTableFirst};
    font-size: ${p => p.theme.fontSizes.xs};
    text-align: center;
    color: ${p => p.theme.colors.textTableSecond};

    :nth-child(2n) {
        background-color: ${p => p.theme.colors.backgroundTableSecond};
    }
`;

export const Tbody = styled.tbody`
    
`;