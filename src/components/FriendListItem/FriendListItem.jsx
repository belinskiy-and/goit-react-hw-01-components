import { Avatar, FriendName, FriendsStatus, ListItem } from "./FriendListItem.styled";

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <ListItem >
            <FriendsStatus status={isOnline} />
            <Avatar src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </ListItem> 
    );
           
}