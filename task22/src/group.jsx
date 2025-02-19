import react from 'react';
const Group = () => {
    const name=["dagi", "koki", "hewi", "hani"]
  return (
    <div>
      <h1>Group name</h1>
      <ul>
        {name.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Group;