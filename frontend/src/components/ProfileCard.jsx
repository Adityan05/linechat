import { useState } from "react";

const ProfileCard = ({ username, setUsername }) => {
  const [tempUsername, setTempUsername] = useState("username");
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {/* <h1 className="text-5xl font-bold">Line Chat</h1> */}
          <img src="/LineChat-MainLogo.png" alt="Line Chat Main Logo" />
          <p className="mb-4 font-bold text-md">
            Create Chat Rooms and enjoy chatting with your People
          </p>
          <div className="aura aura-silver mb-3">
            <div className="card bg-base-100">
              <div className="card-body">
                <label className="block text-4xl text-red-400 m-5 font-bold">
                  {username}
                </label>
              </div>
            </div>
          </div>
          <input
            className="input input-bordered join-item "
            type="text"
            placeholder="Change Username"
            onChange={(e) => {
              setTempUsername(e.target.value);
            }}
          />
          <button
            className="btn btn-soft-secondary border-gray-500 join-item "
            onClick={() => {
              setUsername(tempUsername);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
