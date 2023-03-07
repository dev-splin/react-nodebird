import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../constants/sagas';

const FollowButton = ({ post }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const { me, followLoading, unfollowLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFollowing(me?.Followings.some((following) => following.id === post.User.id));
  }, [me]);

  const onFollow = useCallback(() => {
    dispatch({
      type: isFollowing ? actions.UNFOLLOW_REQUEST : actions.FOLLOW_REQUEST,
      data: post.User.id,
    });
  });

  return <Button loading={followLoading || unfollowLoading} onClick={onFollow}>{isFollowing ? '언팔로우' : '팔로우'} </Button>;
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
