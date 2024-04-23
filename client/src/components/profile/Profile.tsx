// import { useAppSelector } from "../../redux/redux-store/hooks"

const Profile = () => {
  // const userData  = useAppSelector((state) => state.authUser.logedInUser)
  const userData =
    localStorage.getItem("user") &&
    JSON.parse(localStorage.getItem("user") as string);

  return (
    <div className="pt-10 md:pt-24 container mx-auto">
      <h1 className="text-2xl font-bold">{userData?.username}</h1>
      <p>{userData?.email}</p>
    </div>
  );
};

export default Profile;
