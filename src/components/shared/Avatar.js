function Avatar ({ email }) {
  return <img width="40" alt={email} src={`https://avatars.dicebear.com/api/bottts/${email}.svg`} />
}

export default Avatar;
