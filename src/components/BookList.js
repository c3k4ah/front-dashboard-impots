import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import { BsPencil } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import Axios from "axios";
import styles from "../styles/BookList/BookList.module.css";
import Button from "./UI/Button";
import moment from "moment";
const BookList = () => {
    const { books, removeBook } = useContext(GlobalContext);

    const removeHandler = (id) => {
        removeBook(id);
        Axios.delete(`http://localhost:3005/delete/${id}`);
    };

    return (
        <table className={styles["content-table"]}>
            <thead>
                <tr>
                    <th className={styles.nom}>Nom</th>
                    <th className={styles.prenoms}>Prénom</th>
                    <th className={styles.datenaissance}>Date de naissance</th>
                    <th className={styles.lieunaissance}>Lieu de naissance</th>
                    <th className={styles.adresse}>Adresse</th>
                    <th className={styles.tel}>Tel</th>
                    <th className={styles.cin}>CIN</th>
                    <th className={styles.datecin}>Date de création CIN</th>
                    <th className={styles.lieucin}>Lieu de création CIN</th>
                </tr>
            </thead>
            {books.length > 0 && (
                <tbody>
                    {books.map((book) => {
                        console.log(book.nom);
                        return (
                            <tr key={book.id}>
                                <td>{book.nom}</td>
                                <td>{book.prenoms}</td>
                                <td>{moment(book.date_naissance).utc().format('YYYY-MM-DD')}</td>
                                <td>{book.lieu_naissance}</td>
                                <td>{book.adresse}</td>
                                <td>{book.tel1}</td>
                                <td>{book.cin}</td>
                                <td>{moment(book.date_cin).utc().format('YYYY-MM-DD')}</td>
                                <td>{book.lieu_cin}</td>
                                <td>
                                    <div className="actions">
                                        <Link
                                            to={`/edit/${book.id}`}
                                            id={styles.link}
                                            className={styles.link}
                                        >
                                            <BsPencil />
                                            Edit
                                        </Link>
                                        <Button
                                            onClick={() =>
                                                removeHandler(book._id)
                                            }
                                            className={styles.button}
                                        >
                                            <MdDeleteForever />
                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            )}
        </table>
    );
};

export default BookList;
