import Link from "next/link";
import axios from "axios";
import Router from 'next/router';

const delete_func = async (index_key, delete_link, setReload = 0) => {
    const api_delete = `${process.env.API_URL}` + delete_link + index_key;
    setReload(index_key);
    // swal_alert('success', 'Deleted', 'Deleted successfully!');
    // noty_alert('error', 'Deleted successfully!');

    axios.delete(api_delete)
        .then((res) => {
            noty_alert('success', 'Deleted successfully!');
        }).catch((error) => {
            noty_alert('error', 'Deleted successfully!');
        });
}


export default function Action({ index_key, edit_link, delete_link, setReload }) {
    return (
        <>
            <button type="button" className="btn btn-primary p-1 mx-2" title="Edit" onClick={() => Router.push({ pathname: edit_link, query: { hotel_id: index_key } })}>
                <i className="icon-pencil5 m-1"></i>
            </button>
            <button type="button" className="btn btn-danger p-1" title="Delete" onClick={() => delete_func(index_key, delete_link, setReload)}>
                <i className="icon-bin m-1"></i>
            </button>
        </>
    )
}