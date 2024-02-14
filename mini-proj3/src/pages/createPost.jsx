import React from "react"
// import PostForm from "../components/forms/PostForm"

const CreatePost = () => {
  return (
    <div className="relative pb-2 h-full justify-center items-center">
    <div className="flex flex-col pb-5">
      <div className="relative flex flex-col mb-7">
        <div className="flex flex-col justify-center items-center">
          <img
            className=" w-full h-370 2xl:h-510 shadow-lg object-cover"
            src="https://source.unsplash.com/1600x900/?nature,photography,technology"
            alt="user-pic"
          />
          <img
            className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover"
            src={user.image}
            alt="user-pic"
          />
        </div>
        <h1 className="font-bold text-3xl text-center mt-3">
          {user.userName}
        </h1>
        <div className="absolute top-0 z-1 right-0 p-2">
          {userId === User.googleId && (
            <GoogleLogout
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
              render={(renderProps) => (
                <button
                  type="button"
                  className=" bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <AiOutlineLogout color="red" fontSize={21} />
                </button>
              )}
              onLogoutSuccess={logout}
              cookiePolicy="single_host_origin"
            />
          )}
        </div>
      </div>
      <div className="text-center mb-7">
        <button
          type="button"
          onClick={(e) => {
            setText(e.target.textContent);
            setActiveBtn('created');
          }}
          className={`${activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles}`}
        >
          Created
        </button>
        <button
          type="button"
          onClick={(e) => {
            setText(e.target.textContent);
            setActiveBtn('saved');
          }}
          className={`${activeBtn === 'saved' ? activeBtnStyles : notActiveBtnStyles}`}
        >
          Saved
        </button>
      </div>

      <div className="px-2">
        <MasonryLayout pins={pins} />
      </div>

      {pins?.length === 0 && (
      <div className="flex justify-center font-bold items-center w-full text-1xl mt-2">
        No Pins Found!
      </div>
      )}
    </div>

  </div>
);
};

export default CreatePost
