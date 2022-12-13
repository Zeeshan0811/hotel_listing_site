import { useRouter } from "next/router";
import Link from "next/link";

export default function Test() {
    // const router = useRouter();

    const handleClick = (e, path) => {
        e.preventDefault();
        if (path === "/about") {
            console.log("I clicked on the About Page");
        }
        if (path === "/posts") {
            console.log("I clicked on the Posts Page");
        }
    };
    return (
        <div>
            Hello World.{" "}
            <Link href="/">
                <a onClick={(e) => handleClick(e, "/about")}>About</a>
            </Link>{" "}
            <Link href="/">
                <a onClick={(e) => handleClick(e, "/posts")}>Posts</a>
            </Link>
        </div>
    );
}