import fetchDataUsers, { getUser } from "@/app/lib/jsonSeverFn";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

/**============================================
 *               Get give users From json-Server
 *=============================================**/
export async function POST(req) {
    try {
      const data = await req.json();
      //const usrExact=serverUsers.some((item)=>item.email===data.email && item.password===data.password);
      if(data.email==='info@gmail.com' && data.password==='123456'){
        
         return NextResponse.json({ message: 'sucess',login:true },{status:200});
          //return NextResponse.redirect('/dashboard')
      }else{
        return NextResponse.json({ message: 'ایمیل یا پسورد اشتباه می باشد' ,login:false},{status:401});
      }
    }   
    catch (error) {
     return NextResponse.json({ error: error },{status:500});
    }
  
}
