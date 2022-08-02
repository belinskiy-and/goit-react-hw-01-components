import PropTypes from 'prop-types';
import { ProfileCard, UserData, Avatar, UserName, UserContacts, StatsList, StatsItem, StatsHeader, StatsValue } from "./Profile.styled";

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes }
}) => {
    return (
        <div>
            <ProfileCard>
                <UserData>
                    <Avatar src={avatar} alt="User photo" width="150" />
                    <UserName>{username}</UserName>
                    <UserContacts>{tag}</UserContacts>
                    <UserContacts>{location}</UserContacts>                    
                </UserData>       
                <StatsList>
                    <StatsItem>
                        <StatsHeader>Followers</StatsHeader>
                        <StatsValue>{followers}</StatsValue>
                    </StatsItem>
                    <StatsItem>
                        <StatsHeader>Views</StatsHeader>
                        <StatsValue>{views}</StatsValue>
                    </StatsItem>
                    <StatsItem>
                        <StatsHeader>Likes</StatsHeader>
                        <StatsValue>{likes}</StatsValue>
                    </StatsItem>
                </StatsList>
            </ProfileCard>
        </div>
    );        
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}