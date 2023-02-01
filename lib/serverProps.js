export default async function getServerSideProps(ctx) {
    // do something
    return {
        // data
        props: {
            "abc": "Hello world"
        }
    };
}
