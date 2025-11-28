import Avatar from "../atoms/Avatar";
import Badge from "../atoms/Badge";
import Button from "../atoms/Button";

function UserCard({ user, onFollow, isFollowing }) {
  console.log(`UserCard: ${user.name}`);
  return (
    <div className="user-card">
      <div className="user-header">
        <Avatar src={user.avatar} alt={user.name} size="large" />
        <div className="user-info">
          <h3>{user.name}</h3>
          <p>@{user.username}</p>
          {user.isVerified && <Badge text="Verificato" type="success" />}
        </div>
      </div>

      <p className="user-bio">{user.bio}</p>

      <div className="user-stats">
        <span>
          <strong>{user.followers}</strong> follower
        </span>
        <span>
          <strong>{user.following}</strong> seguiti
        </span>
      </div>

      <div className="user-actions">
        <Button variant={isFollowing ? "secondary" : "primary"} onClick={onFollow}>
          {isFollowing ? "Smetti di seguire" : "Segui"}
        </Button>
        <Button variant="outline">Messaggio</Button>
      </div>
    </div>
  );
}
export default UserCard;
