const Login = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <button
        // onClick={() =>
        //   fetch({
        //     url: "https://us-central1-spotify-ree.cloudfunctions.net/redirect",
        //   })
        // }
        className="p-4 rounded-md bg-black text-spotify-green text-2xl hover:bg-gray-900"
      >
        Login With Spotify
      </button>
    </div>
  );
};

export default Login;
