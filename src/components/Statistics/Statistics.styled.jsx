import styled from "styled-components";

export const Section = styled.section`
    background-color: ${p => p.theme.colors.backgroundFirst};
    width: ${p=>p.theme.sizes[3]}px;
    margin: ${p=>p.theme.space[5]}px auto;
    border-radius: ${p=>p.theme.radii.normal};
    box-shadow: ${p=>p.theme.shadows.normal};
`;

export const Title = styled.h2`
    font-size: ${p => p.theme.fontSizes.xl};
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${p=>p.theme.sizes[1]}px;
    text-transform: uppercase;
    color: ${p => p.theme.colors.text};
    margin: ${p => p.theme.space[0]}px;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: ${p => p.theme.space[0]}px;
    padding: ${p => p.theme.space[0]}px;    
`;

export const StatsItem = styled.li`
    color: #ffffff;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]}px;
    background-color: ${p => p.backgroundColor};
`;

export const StatusLabel = styled.span`
    text-align: center;
    font-size: ${p => p.theme.fontSizes.xs};
`;

export const StatusPercentage = styled.span`
    text-align: center;
    font-size: ${p => p.theme.fontSizes.l};
`; 