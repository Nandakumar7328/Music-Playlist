import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #152850;
  min-height: 100vh;
`
export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 50vh;
  background-size: cover;
  width: 100%;
  padding: 40px;
`
export const Name = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 0px;
`
export const Role = styled.p`
  color: #cbd5e1;
  font-family: 'Roboto';
  margin-top: 0px;
  font-size: 26px;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`
export const SongsList = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
`
export const SearchLogoContainer = styled.div`
  border: 1px solid #cbd5e1;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SearchInput = styled.input`
  background-color: transparent;
  outline: none;
  height: 30px;
  width: 300px;

  padding-left: 10px;
  color: #cbd5e1;
  border-width: 0px;
`
export const ButtonSearch = styled.button`
  background-color: transparent;
  outline: none;
  border-width: 0px;
  cursor: pointer;
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
  padding-right: 30px;
  overflow-y: auto;
  height: 200px;
`
export const UlList = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoResultText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
`
