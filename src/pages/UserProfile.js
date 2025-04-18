// UserProfile.js
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
    const [user, setUser] = useState({});
  // useParams allows us to access the data we've stored in our URL parameters and use it within
  // our components.
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [userId]);

  if (!user.name) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </>
  );
}

export default UserProfile;
