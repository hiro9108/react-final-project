import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import { TextField } from '../../UI';
import {
  selectIssues,
  searchIssues,
} from '../../../infrastructure/store/data/dataSlice';

interface HasHome {
  isHome: boolean;
}

const Navbar: React.FC<HasHome> = ({ isHome }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [modal, setModal] = useState(false);
  const [update, setUpdata] = useState(false);

  const issues = useSelector(selectIssues);
  const dispatch = useDispatch();

  const onChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchArray = issues.filter((issue) => {
        return (
          issue.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        );
      });
      console.log(searchArray);
      dispatch(searchIssues(searchArray));
      setUpdata(update ? false : true);
    },
    []
  );

  return (
    <div
      className={
        'flex justify-center items-centerflex-wrap' + (isHome && 'h-screen')
      }
    >
      {modal && (
        <div
          className="h-screen w-full fixed z-10 bg-secondary opacity-80"
          onClick={() => {
            setIsClicked(!isClicked);
            setModal(!modal);
          }}
        />
      )}
      <nav className="navbar fixed top-0 left-0 z-20 bg-primary border-b border-secondary border-opacity-25 sm:flex sm:justify-between sm:items-center">
        <div className="flex justify-between items-center h-full px-10">
          <Link href="/">
            <a className="cursor-pointer uppercase">logo</a>
          </Link>
          <div className="">
            <div
              className="cursor-pointer sm:hidden"
              onClick={() => {
                setIsClicked(!isClicked);
                setModal(!modal);
              }}
            >
              <div
                className={
                  isClicked
                    ? 'menu-icon-bar w-8 mb-3 transform translate-y-4 rotate-45'
                    : 'menu-icon-bar mb-3'
                }
              ></div>
              <div
                className={
                  isClicked
                    ? 'menu-icon-bar w-8 transform -rotate-45'
                    : 'menu-icon-bar'
                }
              ></div>
              <div
                className={
                  isClicked
                    ? 'menu-icon-bar w-8 mt-3 transition-all duration-500 ease-in-out transform -translate-y-4 -rotate-45'
                    : 'menu-icon-bar mt-3'
                }
              ></div>
            </div>
          </div>
        </div>
        <div className="bg-primary px-10">
          <ul
            className={
              (isClicked ? 'block ' : 'hidden ') +
              'sm:flex sm:justify-center sm:items-center'
            }
          >
            {isHome ? (
              <Link href="/dashboard">
                <a className="cursor-pointer capitalize">login</a>
              </Link>
            ) : (
              <>
                <TextField
                  type="search"
                  placefolder="Title Search..."
                  onChange={onChangeSearch}
                />
                <Link href="/">
                  <a className="cursor-pointer capitalize">logout</a>
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
