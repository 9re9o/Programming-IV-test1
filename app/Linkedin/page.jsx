/* import React, { useState, useEffect } from "react";
import React from "react";
import { useEffect } from "react";

export default function LinkedInProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {user && (
        <div className="container">
          <img
            src={
              user.profilePicture["displayImage~"].elements[0].identifiers[0]
                .identifier
            }
            alt="avatar"
          ></img>
          <h4>
            {user.firstName.localized.en_US} {user.lastName.localized.en_US}
          </h4>
        </div>
      )}
    </>
  );
}
 */
