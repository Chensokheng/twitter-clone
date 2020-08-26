import React from 'react';
import Loading from './components/Loading';
import Routes from '../../../routes/Routes';
import useReadSession from '../hook/useReadSession';

export default function Wrapper() {
  const isLoading = useReadSession();
  return <div>{isLoading ? <Loading loading={isLoading} /> : <Routes />}</div>;
}
