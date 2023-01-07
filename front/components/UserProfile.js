import PropTypes from 'prop-types';
import {Avatar, Button, Card} from "antd";
import {useCallback} from "react";

const {Meta} = Card;

const UserProfile = ({setIsLoggedIn}) => {
  let onLoggOut = useCallback(() => {
    setIsLoggedIn(false);
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
        avatar={<Avatar>ZC</Avatar>}
        title="Splin"
      />
      <Button onClick={onLoggOut}>로그아웃</Button>
    </Card>
  );
};

UserProfile.propTypes = {};

export default UserProfile;