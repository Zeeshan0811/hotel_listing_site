import Image from "next/image";

export default function Home() {
  return (
    <div className="row mt-5 mb-5">
      <div className="col-md-12 text-center">
        <Image src={
          `${process.env.IMAGE_URL
          }upload/bg/2030.jpg`
        }
          alt=""
          width="600vh"
          height="420vh"
          loading="lazy" />
      </div>
    </div>
  );
}
