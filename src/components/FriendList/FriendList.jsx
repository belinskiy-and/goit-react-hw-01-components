import PropTypes from 'prop-types';
import { Avatar, FriendName, FriendsStatus, List, ListItem, Section } from "./FriendList.styled";

export const FriendList = ({friendsList}) => {
    return (
        <Section>
            <List>
                {friendsList.map(friendsItem => (
                    <ListItem key={friendsItem.id}>
                        <FriendsStatus status={friendsItem.isOnline} />
                        <Avatar src={friendsItem.avatar} alt={friendsItem.name} width="48" />
                        <FriendName>{friendsItem.name}</FriendName>
                   </ListItem> 
                ))}
            </List>    
        </Section>

    );
}

FriendList.propTypes = {
    friendsList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,            
        }),
    ),    
}