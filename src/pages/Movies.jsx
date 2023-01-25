import { useState, useEffect } from 'react';

import { Link, useSearchParams } from 'react-router-dom';

import {} from '../../src/API/Api';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = e => {
    e.preventDefault();
    // console.log(e);
  };

  const inputChange = e => {
    setSearchParams(e.target.value ? { query: e.target.value } : {});
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={inputChange} type="text" />
    </form>
  );
};
