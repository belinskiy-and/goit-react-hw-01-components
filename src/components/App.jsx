// import styled from "styled-components"
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './Transactions/Transactions';

import userData from '../data/user.json';
import statisticsData from '../data/data.json';
import friendsList from '../data/friends.json';
import transactonList from '../data/transactions.json';

export const App = () => {
  return (
    <main>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statisticsData} />
      <Statistics stats={statisticsData} />

      <FriendList friendsList={friendsList} />

      <Transactions tansactions={transactonList} />
    </main>
  )
}