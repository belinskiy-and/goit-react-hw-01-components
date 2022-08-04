import styled from "styled-components";

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    min-height: ${p => p.theme.sizes[1]}px;
    padding: ${p => p.theme.space[0]}px ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.backgroundFirst};    
    box-shadow: ${p => p.theme.shadows.main};
    border-radius: ${p => p.theme.radii.normal};

    :not(:last-child) {
        margin-bottom: ${p => p.theme.space[4]}px;
    }
`;

export const FriendsStatus = styled.span`
    width: ${p => p.theme.sizes[5]}px;
    height: ${p => p.theme.sizes[5]}px;
    background-color: ${p => p.status ? p.theme.colors.onlineStatus: p.theme.colors.offlineStatus};
    border-radius: ${p => p.theme.radii.round};
`;

export const Avatar = styled.img`
    border-radius: ${p => p.theme.radii.normal};
    margin: ${p => p.theme.space[0]}px ${p => p.theme.space[4]}px;
`;

export const FriendName = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
`;