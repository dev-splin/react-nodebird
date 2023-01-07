import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NickNameEditForm from "../components/NickNameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followingList = [{nickname: 'a'}, {nickname: 'b'}, {nickname: 'c'}];
  const followerList = [{nickname: 'd'}, {nickname: 'e'}, {nickname: 'f'}];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NickNameEditForm/>
        <FollowList header="팔로잉 목록" data={followingList}/>
        <FollowList header="팔로워 목록" data={followerList}/>
      </AppLayout>
    </>
  )
};

export default Profile;
