import { useState } from "react";
import UserCard from "../molecules/UserCard";

export default function UserList({ users }) {
  const [followingUsers, setFollowingUsers] = useState(new Set());

  const handleFollow = (userId) => {
    const newFollowing = new Set(followingUsers);
    if (newFollowing.has(userId)) {
      newFollowing.delete(userId);
    } else {
      newFollowing.add(userId);
    }
    setFollowingUsers(newFollowing);
  };

  console.log(followingUsers);
  return (
    <div className="user-list">
      <h2>Utenti consigliati</h2>
      <div className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} isFollowing={followingUsers.has(user.id)} onFollow={() => handleFollow(user.id)} />
        ))}
      </div>
    </div>
  );
}
