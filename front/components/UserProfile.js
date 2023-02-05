import PropTypes from 'prop-types';
import {Avatar, Button, Card} from "antd";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logoutRequestAction} from "../reducers/user";

const {Meta} = Card;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector(state => state.user);
  const onLoggOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">짹짹<br/>0</div>,
        <div key="followings">팔로잉<br/>0</div>,
        <div key="followers">팔로워<br/>0</div>,
      ]}
    >
      <Meta
        avatar={<Avatar>{me.nickname}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLoggOut} loading={isLoggingOut}>로그아웃</Button>
    </Card>
  );
};

UserProfile.propTypes = {};

export default UserProfile;