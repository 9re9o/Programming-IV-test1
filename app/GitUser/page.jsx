/* import React, {useState} from "react";
import styles from "./../../styles/globals.css";
import Image from "next/image";

export default function LinkGitProfile() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div>
      <h1>GitHub Profile Search</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={fetchUser}>Search</button>
      {user && (
        <div>
          <img src={user.avatar_url} alt="avatar" />
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Location: {user.location}</p>
          <p>Twitter: {user.twitter_username}</p>
          <p>Twitter: {user.repos_url}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
 */