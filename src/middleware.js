import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const middleware = async (request) =>{

     const token = cookies(request).get("__Secure-next-auth.session-token")

// api excluded the matcher
     const pathName = request.nextUrl.pathname;
      if(pathName.includes('api') ){
        return NextResponse.next()
      }


    if(!token){
        return NextResponse.redirect(new URL(`/login?redirect=${pathName}`, request.url));
    }
     return NextResponse.next();
}

export const config = {
    matcher : [ "/my-bookings/:path*", "/services/:path*", ], };