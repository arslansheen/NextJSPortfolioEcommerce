import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LayoutComponent from '../Components/LayoutComponent';
export default function Home() {
  const [likes, setLikes] = React.useState(0);
  function incrementLikes() {
    setLikes(likes + 1);
  }
  return (
    <>
      <LayoutComponent>
        <h1>Products</h1>
        <div>
          <ul>
            <input
              type="button"
              onClick={incrementLikes}
              value="increment likes"
            />
            {likes}
            <li>product 1</li>
            <li>product 2</li>
            <li>product 3</li>
            <li>product 3</li>
          </ul>
        </div>
      </LayoutComponent>
    </>
  );
}
