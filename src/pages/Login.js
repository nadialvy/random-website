import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowDownRight } from "lucide-react";
import { useLoginMutation } from "../services/LoginMutation";

export default function Login() {
  const loginMutation = useLoginMutation();
  const isLoading = loginMutation.isPending;

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataPayload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    loginMutation.mutate(dataPayload);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [hovered, setHovered] = useState(false);

  const methods = useForm();
  return (
    <div className="h-screen overflow-hidden w-screen flex items-center justify-center bg-white">
      <div
        className="relative group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.img
          src="https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-30.svg"
          alt="Asset 1"
          className="absolute w-36 h-36"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered
              ? { opacity: 1, scale: 1, x: -100, y: -100, rotate: 360 }
              : {}
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.img
          src="https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-30.svg"
          alt="Asset 2"
          className="absolute w-48 h-48"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered
              ? { opacity: 1, scale: 1, x: 120, y: -120, rotate: 270 }
              : {}
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        />
        <motion.img
          src="https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-30.svg"
          alt="Asset 3"
          className="absolute w-44 h-44"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered ? { opacity: 1, scale: 1, x: -80, y: 120, rotate: 180 } : {}
          }
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        />
        <motion.img
          src="https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-12.svg"
          alt="Asset 4"
          className="absolute w-44 h-44"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered
              ? { opacity: 1, scale: 1, x: -120, y: 340, rotate: 360 }
              : {}
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
        <motion.img
          src="https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-12.svg"
          alt="Asset 5"
          className="absolute w-24 h-24"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered
              ? { opacity: 1, scale: 1, x: 120, y: -240, rotate: 270 }
              : {}
          }
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        />
        <motion.img
          src="https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-04.svg"
          alt="Asset 5"
          className="absolute w-32 h-32"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered ? { opacity: 1, scale: 1, x: 320, y: 240, rotate: 360 } : {}
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        />
        <motion.img
          src="https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-04.svg"
          alt="Asset 5"
          className="absolute w-32 h-32"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered
              ? { opacity: 1, scale: 1, x: -320, y: 140, rotate: 100 }
              : {}
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        />
        <motion.img
          src="https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-03.svg"
          alt="Asset 5"
          className="absolute w-24 h-24"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered
              ? { opacity: 1, scale: 1, x: -120, y: 140, rotate: 300 }
              : {}
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        />
        <motion.img
          src="https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-03.svg"
          alt="Asset 5"
          className="absolute w-40 h-40"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered ? { opacity: 1, scale: 1, x: 240, y: 0, rotate: 180 } : {}
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
        <motion.img
          src=" https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-32.svg"
          alt="Asset 5"
          className="absolute w-36 h-36"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered
              ? { opacity: 1, scale: 1, x: 120, y: 240, rotate: 180 }
              : { opacity: 0, scale: 0, rotate: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
        <motion.img
          src="https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-11.svg"
          alt="Asset 5"
          className="absolute w-28 h-28"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered
              ? { opacity: 1, scale: 1, x: -200, y: 20, rotate: 400 }
              : { opacity: 0, scale: 0, rotate: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
        <motion.img
          src="https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-06.svg"
          alt="Asset 5"
          className="absolute w-20 h-20"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered
              ? { opacity: 1, scale: 1, x: 400, y: 120, rotate: 300 }
              : { opacity: 0, scale: 0, rotate: 0 }
          }
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
        />
        <motion.img
          src="https://oatside.com/wp-content/uploads/2022/01/OS_StickerSetForWeb-02.svg"
          alt="Asset 5"
          className="absolute w-24 h-24"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
          animate={
            hovered
              ? { opacity: 1, scale: 1, x: 230, y: 380, rotate: 300 }
              : { opacity: 0, scale: 0, rotate: 0 }
          }
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
        />

        {/* LOGIN CARD */}
        <div className="bg-[#6ee7b7] group border relative w-[230px] sm:w-[300px] border-2 border-black h-[300px]">
          <div className="absolute -top-[2px] -left-[2px]">
            <div className="bg-[#6ee7b7] border relative w-[230px] sm:w-[300px] border-2 border-black h-[300px] relative transition-transform duration-300 ease-in-out hover:translate-x-[-14px] hover:translate-y-[-14px]">
              <div className="absolute -top-[1px] -left-[1px]">
                <div className="bg-[#6ee7b7] hover:cursor-pointer w-[230px] sm:w-[300px] h-[300px] border-2 border-black p-8 relative transition-transform duration-300 ease-in-out hover:translate-x-[-14px] hover:translate-y-[-14px]">
                  <div className="flex gap-2 mb-4">
                    <ArrowDownRight
                      size={24}
                      className="-translate-x-8 mt[1px] group-hover:-translate-x-0 transition-transform ease-out duration-700 opacity-0 group-hover:opacity-100"
                    />
                    <p className="-translate-x-8 group-hover:-translate-x-0 transition-transform ease-out duration-700 font-bold text-xl">
                      LOGIN
                    </p>
                  </div>
                  <FormProvider {...methods}>
                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                      <label className="block">
                        <p className="text-sm">Email</p>
                        <input
                          name="email"
                          type="email"
                          className="w-full border border-gray-200 p-1"
                          placeholder="youremail@gmail.com"
                          required
                        />
                      </label>
                      <label className="block relative">
                        <p className="text-sm">Password</p>
                        <input
                          name="password"
                          type={showPassword ? "text" : "password"}
                          className=" w-full border border-gray-200 p-1"
                          placeholder="********"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-[70%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                      </label>
                      <button
                        type="submit"
                        className="bg-[#41a980] hover:bg-[#2e8a65] hover:cursor-pointer p-1 text-white text-sm text-center"
                        disabled={isLoading}
                      >
                        {isLoading ? "Loading..." : "Login"}
                      </button>
                    </form>
                  </FormProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
