import styled from 'styled-components';

export const ProfileCard = styled.div`
    background-color: ${p => p.theme.colors.backgroundFirst};
    width: ${p => p.theme.sizes[4]}px;
    margin: ${p => p.theme.space[3]}px auto;
    border-radius: ${p => p.theme.radii.normal};
    line-height: ${p => p.theme.lineHeights.normal};
    box-shadow: ${p => p.theme.shadows.main};
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: ${p => p.theme.sizes[3]}px;
`;

export const Avatar = styled.img`
    border-radius: ${p => p.theme.radii.round};
    align-items: center;
    margin-bottom: ${p => p.theme.space[4]}px;    
`;

export const UserName = styled.h2`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin: 0;
`;

export const UserContacts = styled.span`
    color: ${p => p.theme.colors.textSecond};
`;

export const StatsList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: stretch;
    background-color: ${p => p.theme.colors.backgroundSecond};
    margin: 0;
    padding: 0;
    width: 100%;

`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 15px 5px;
    border-top: 1px solid rgb(202, 211, 220);

    :not(:last-child) {
        border-right: 1px solid rgb(202, 211, 220);
    }
`;

export const StatsHeader = styled.h3`
    font-size: 14px;
    font-weight: 400;
    color: rgb(117, 117, 117);
    margin: 0;
`;

export const StatsValue = styled.p`
    font-weight: 700;
    margin: 0;
`;