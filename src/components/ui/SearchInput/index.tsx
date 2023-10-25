import Image from 'next/image';
import { FC } from 'react';

import s from './styles.module.scss';

interface Props {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

export const SearchInput: FC<Props> = ({ searchValue, setSearchValue }) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className={s.searchBar}>
      <input
        type="text"
        className={s.textbox}
        placeholder="Search"
        value={searchValue}
        onChange={onChange}
      />
      <figure className={s.searchBarImage}>
        <Image alt="search" src="images/svg/search.svg" fill />
      </figure>
    </div>
  );
};
