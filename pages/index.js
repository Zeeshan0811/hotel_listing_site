import Image from "next/image";
import { getToken } from 'next-auth/jwt';
import React from 'react';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


export default function Home() {
  // console.log(abc);
  return (
    <div className="row mt-5 mb-5">
      <div className="col-md-12 text-center">
        <Image src={
          `${process.env.IMAGE_URL
          }upload/bg/2030.jpg`
        }
          alt=""
          width="600"
          height="420"
          loading="lazy" />
      </div>
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   const token = await getToken(context);
//   return {
//     props: { token }
//   }
// }


// export const getServerSideProps = ({ req, res }) => {
//   // setCookie('test', 'value', { req, res, maxAge: 60 * 6 * 24 });
//   let abc = getCookie('auth', { req, res });
//   // getCookies({ req, res });
//   // deleteCookie('test', { req, res });

//   return { props: { abc } };
// };

