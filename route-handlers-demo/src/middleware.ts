import { NextResponse, type NextRequest } from "next/server";

//First Approach of middleware

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/", request.url));
// };

// export const config ={
//     matcher: "/profile"
// }

export function middleware(request:NextRequest){
    const response = NextResponse.next();
    console.log("res",response);
    
   const themePreference = request.cookies.get("theme");
   if(!themePreference){
       response.cookies.set("theme","dark");
   }

   response.headers.set("Custom-Header", "Custom-Value");

   return response;
    //if(request.nextUrl.pathname === "/profile"){
      //  return NextResponse.redirect(new URL("/hello", request.url))

        //Middleware also provide url rewrite which is useful tool for legacy url  support and SEO Optimization
      //  return NextResponse.rewrite(new URL("/hello", request.url))

   // }
}