const Vip = ({ user }) => {
  const { id, name, username, avatar, age, isVip, hobbys, followers } = user;

  return (
    <>
      <div>
        <img src={avatar} alt={name} />
        <h2>Utente Vip: {name}</h2>
        <h3>Hobbys: {hobbys.join(", ")}</h3>
      </div>
    </>
  );
};

export default Vip;
