import React from 'react';
import { Card, Avatar } from 'antd';
import { PropTypes } from 'prop-types';

const UserProfile = ({ dummy }) => {
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {dummy.Post.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {dummy.Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {dummy.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>{dummy.nickname[0]}</Avatar>} title={dummy.nickname} />
    </Card>
  );
};

UserProfile.propTypes = {
  dummy: PropTypes.shape({
    nickname: PropTypes.string,
    Post: PropTypes.array,
    Followers: PropTypes.array,
    Followings: PropTypes.array,
    isLoggedIn: PropTypes.boolean,
  }),
};

export default UserProfile;
