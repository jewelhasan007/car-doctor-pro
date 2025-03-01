import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const SocialSignIn = () => {
  const route = useRouter();
  const session = useSession();
  const handleSocialLogin = async(provider) =>{
    const resp = await signIn(provider)
    console.log(resp)
  }

  if(session.status === "authenticated"){
    route.push('/')
  }

  return (
    <div>
       <button onClick={ () => handleSocialLogin('google')} className="btn btn-outline rounded-full mr-3">
        <FcGoogle />
      </button>
      <button onClick={ () => handleSocialLogin('github')}  className="btn btn-outline rounded-full">
      <FaGithub />
      </button>

    </div>
  );
};

export default SocialSignIn;
