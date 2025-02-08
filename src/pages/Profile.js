import Loading from "../component/Loading";
import WithAuth from "../component/withAuth";
import { useGetProfile } from "../services/ProfileMutation";
import { useNavigate } from "react-router-dom";
import { Sparkle } from "lucide-react";

function Profile() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetProfile();

  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  const LogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white border">
      <div className="bg-[#a5b4fa] group border relative w-[230px] sm:w-[300px] border-2 border-black h-[300px]">
        <div className="absolute -top-[2px] -left-[3px]">
          <div className="bg-[#a5b4fa] border relative w-[230px] sm:w-[300px] border-2 border-black h-[300px] relative transition-transform duration-500 ease-in-out hover:translate-x-[-14px] hover:translate-y-[-14px]">
            <div className="absolute -top-[1px] -left-[2px]">
              <div className="relative overflow-hidden bg-[#a5b4fa] hover:cursor-pointer w-[230px] sm:w-[300px] h-[300px] border-2 border-black p-8 relative transition-transform duration-500 ease-in-out hover:translate-x-[-14px] hover:translate-y-[-14px]">
                <div className="absolute top-[-40px] right-[-40px] w-[100px] h-[100px] opacity-0 group-hover:opacity-100">
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg viewBox="0 0 100 100" className="animate-spin-slow">
                    <path
                      id="curve"
                      d="M50,10 a40,40 0 1,1 -0.1,0"
                      fill="transparent"
                    />
                    <text>
                      <textPath
                        href="#curve"
                        startOffset="0%"
                        textAnchor="middle"
                        className="text-[14px] font-bold uppercase"
                      >
                        NADIA LOVELY NADIA LOVELY NADIA LOVELY NADIA LOVELY
                        NADIA LOVELY NADIA LOVELY NADIA LOVELY NADIA LOVELY
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="flex flex-col gap-y-4 h-full">
                  <div className="flex gap-2">
                    <Sparkle
                      size={24}
                      className="-translate-x-8 mt[1px] group-hover:-translate-x-0 transition-transform ease-out duration-700 opacity-0 group-hover:opacity-100"
                    />
                    <p className="-translate-x-8 group-hover:-translate-x-0 transition-transform ease-out duration-700 font-bold text-xl">
                      YOUR PROFILE
                    </p>
                  </div>
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex justify-around text-[14px] pt-8 translate-y-16 group-hover:translate-y-0 transition-transform ease-out duration-700">
                      <div>
                        <p>Username</p>
                        <p>Email</p>
                        <p>DOB</p>
                        <p>Gender</p>
                      </div>
                      <div className="">
                        <p>: {data.username}</p>
                        <p>: {data.email}</p>
                        <p>: {data.dob}</p>
                        <p>: {data.gender}</p>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 translate-y-16 group-hover:translate-y-0 transition-transform ease-out duration-700">
                      <button
                        onClick={() => LogOut()}
                        className="w-full hover:text-white -translate-y-12 text-sm bg-[#6274c9] p-2 hover:bg-[#4152a2] transition-all duration-300 text-center transition-transform ease group-hover:translate-y-0"
                        type="submit"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithAuth(Profile);
