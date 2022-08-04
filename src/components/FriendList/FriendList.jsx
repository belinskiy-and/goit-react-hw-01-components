import PropTypes from 'prop-types';
import { List, Section } from "./FriendList.styled";
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friendsList}) => {
    return (
        <Section>
            <List>
                {friendsList.map(({ id, isOnline, avatar, name }) => (
                    <FriendListItem 
                        id={id} 
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                    />
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