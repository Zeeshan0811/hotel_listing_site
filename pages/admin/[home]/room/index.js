import { useRouter } from "next/router";

const Room = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h2>Home: {router.query.home}</h2>
            <h2>Room: {router.query.room}</h2>
        </div>
    )
}

export default Room;