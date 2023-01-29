import Link from "next/link";
import axios from "axios";
import Router from 'next/router';

const delete_func = async (api_delete_link) => {
    const api_delete = `${process.env.API_URL}` + api_delete_link;

    axios.delete(api_delete)
        .then((res) => {
            swal_alert('success', 'Deleted', 'Deleted successfully!');
            setTimeout(() => Router.reload(window.location.pathname), 3000);
        }).catch((error) => {
            swal_alert('error', 'Error', 'Something went wrong! Please try again...');
        });
}


export default function Action({ index_key, edit_link, delete_link }) {
    return (
        <>
            <button type="button" className="btn btn-primary p-1 mx-2" title="Edit" onClick={() => Router.push({ pathname: edit_link, query: { index_key } })}>
                <i className="icon-pencil5 m-1"></i>
            </button>
            <button type="button" className="btn btn-danger p-1" title="Delete" onClick={() => delete_func(delete_link + index_key)}>
                <i className="icon-bin m-1"></i>
            </button>
        </>
    )
}