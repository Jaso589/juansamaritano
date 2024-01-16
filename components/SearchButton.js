import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/styles/SearchButton.module.css'
import Image from 'next/image';

const SearchButton = ({ products }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search query
  useEffect(() => {
    if (router.query.q) {
      setSearchTerm(router.query.q);
    } else {
      setSearchTerm('');
    }
  }, [router.query.q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      router.push(`/blog?q=${searchTerm}`);
    } else {
      router.push('/blog');
    }
  };

  return (
    <div className={styles.search_container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar..."
        />
        <button type="submit"><Image src={'/svg/search_d.svg'} width={30} height={30} alt='search'/></button>
      </form>
    </div>
  );
};

export default SearchButton