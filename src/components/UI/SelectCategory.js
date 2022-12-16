import styles from '../../styles/UI/SelectCategory/SelectCategory.module.css'

const SelectCategory = (props) => {
    return(
        <article className={styles.select}>
                <select name={props.name} onChange={props.onChange} value={props.value}>
                    <option value="" selected disabled>
                        Habilitation
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Intermediaire">Intermediaire</option>
                </select>
            </article>
    )
}

export default SelectCategory;