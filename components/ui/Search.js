import styles from "@/components/ui/Button.module.css";
import Image from "next/image";

const Search = ({ label, onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder={label} onChange={handleInputChange} />
      <Image src="/icons/SearchIcon.svg" alt="search" width={25} height={25} />
    </div>
  );
};

export default Search;
