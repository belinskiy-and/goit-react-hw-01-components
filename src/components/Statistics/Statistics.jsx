import PropTypes from 'prop-types';
import {
    Section,
    Title,
    StatsList,
    StatsItem,
    StatusLabel,
    StatusPercentage
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//----------------------------------------
// STYLED COMPONENTS   

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && <Title>{title}</Title>}
            <StatsList>                
                {stats.map(item => (
                    <StatsItem key={item.id} backgroundColor={getRandomHexColor()}>
                        <StatusLabel>{item.label}</StatusLabel>
                        <StatusPercentage>{item.percentage}%</StatusPercentage>
                   </StatsItem> 
                ))}
            </StatsList>            
        </Section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
}