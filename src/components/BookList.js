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
    let singleBook = {};

    const removeHandler = (id) => {
        removeBook(id);
        Axios.delete(`http://localhost:3005/delete/${id}`);
    };

    const onShowModal = (book) => {
        singleBook = book;
    }

    return (
        <div>
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
                                                // to={`/edit/${book.id}`}
                                                id={styles.link}
                                                className={styles.link}

                                                onClick={onShowModal(book)}
                                                data-bs-toggle="modal" 
                                                data-bs-target="#exampleModal" 
                                                data-bs-whatever="@getbootstrap"
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

            <div className="modal fade" id="exampleModal" tabIndex="-1" 
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modifier:</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input type="hidden" className="form-control" 
                                        id="update_personne_id" value={singleBook.id} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="update_adresse" className="col-form-label">Adresse:</label>
                                    <input type="text" className="form-control" 
                                        id="update_adresse" value={singleBook.adresse} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="update_tel1" className="col-form-label">Tel1:</label>
                                    <input type="text" className="form-control" 
                                        id="update_tel1" value={singleBook.tel1} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="update_tel2" className="col-form-label">Tel2:</label>
                                    <input type="text" className="form-control" 
                                        id="update_tel2" value={singleBook.tel2} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="update_email" className="col-form-label">Email:</label>
                                    <input type="text" className="form-control" 
                                        id="update_email" value={singleBook.email} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Valider</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookList;
