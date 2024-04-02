import AlbumList from '@/components/AlbumList';
import ContainerB from '@/components/ContainerB';
import Navbar from '@/components/MobileNavbar';
import PlaylistList from '@/components/PlylistList';
import TrackList from '@/components/TrackList';
import Title from '@/components/UI/Title';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout from '@/layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchAlbum } from '@/store/actions-creators/album';
import { fetchTracks } from '@/store/actions-creators/track';
import { Button } from '@mui/material';
import { useEffect } from 'react';

export default function Home() {
  const {width, height} = useTypedSelector(state => state.size)
  const {tracks} = useTypedSelector(state => state.track)
  const {albums} = useTypedSelector(state => state.album)
  useEffect(() => {
    console.log(tracks)
  })
  return (
    <>
      <MainLayout>
        <ContainerB>
          <Title seeAllPath='/tracks'>Список новых треков</Title>
          <TrackList
          tracks={tracks}
          />
          <Title seeAllPath='/albums' stylesCSS={{marginTop: 35}}>Список новых альбомов</Title>
          <AlbumList
          albums={albums}
          />
          <Title seeAllPath='/albums' stylesCSS={{marginTop: 35}}>Ваши плейлисты</Title>
          <PlaylistList
          playlists={}
          />
        </ContainerB>
      </MainLayout>
    </>
  );
}


export const getServerSideProps = wrapper.getServerSideProps(
  store => async () =>
  {
      const dispatch = store.dispatch as NextThunkDispatch;
      await dispatch(fetchTracks());
      await dispatch(fetchAlbum());

      return { props: {} }
  }
);
