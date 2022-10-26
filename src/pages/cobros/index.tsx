import React, {  NextPage } from 'next'
import { BookList } from '../../components/BookList/BookList';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';
import { MovieList } from '../../components/MovieList/MovieList';

interface TProps {
  response: string;
}

const Cobros: NextPage<TProps> = ({response}) => {
  return (
  <ApplicationWrapper title='Cobros' description='bienvenido a los Cobros'>
    <h1 className="text-3xl font-bold underline">
      Cobros
    </h1>
    <BookList/>
    <MovieList/>
  </ApplicationWrapper>
  );
};

export default Cobros;
