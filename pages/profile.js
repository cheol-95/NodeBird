import React from 'react';

import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{ nickname: '강' }, { nickname: '팔로워' }, { nickname: '노드버드오피셜' }];
  const followingList = [{ nickname: '철' }, { nickname: '팔로윙' }, { nickname: '노드버드오피셜' }];

  return (
    <div>
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowList header="팔로잉 목록" data={followerList} />
    </div>
  );
};

export default Profile;
