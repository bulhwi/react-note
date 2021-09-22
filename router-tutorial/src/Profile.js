import React from "react";

const data = {
  username: {
    name: "UserName",
    description: "유저 네임 하하하하하하"
  },
  computer: {
    name: "Computer",
    description: "컴퓨터 히ㅏ하하하"
  }
};

const Profile = ({match}) => {
  const {username} = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  )
}

export default Profile;
