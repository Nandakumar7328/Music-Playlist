import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import MusicItem from '../MusicItem'
import {
  MainContainer,
  Banner,
  Name,
  Role,
  SearchContainer,
  SongsList,
  SearchInput,
  SearchLogoContainer,
  ButtonSearch,
  SubContainer,
  UlList,
  NoResult,
  NoResultText,
} from './styledComponents'

class MusicHome extends Component {
  state = {playList: [], inputSearch: ''}

  componentDidMount() {
    const {initialTracksList} = this.props
    this.setState({playList: initialTracksList})
  }

  onChangeSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  onDeleteResult = id => {
    const {playList} = this.state
    const deleteResult = playList.filter(eachDelete => eachDelete.id !== id)
    this.setState({playList: deleteResult})
  }

  render() {
    const {playList, inputSearch} = this.state
    const searchResult = playList.filter(eachSong =>
      eachSong.name.toLowerCase().includes(inputSearch.toLowerCase()),
    )
    return (
      <MainContainer>
        <Banner>
          <Name>Ed Sheeran</Name>
          <Role>Singer</Role>
        </Banner>
        <SearchContainer>
          <SongsList>Songs Playlist</SongsList>
          <SearchLogoContainer>
            <SearchInput
              type="search"
              placeholder="Search"
              onChange={this.onChangeSearch}
            />
            <ButtonSearch type="button">
              <AiOutlineSearch color="#ffffff" font-size="25" />
            </ButtonSearch>
          </SearchLogoContainer>
        </SearchContainer>
        <SubContainer>
          {searchResult.length === 0 ? (
            <NoResult>
              <NoResultText>No Songs Found</NoResultText>
            </NoResult>
          ) : (
            <UlList>
              {searchResult.map(eachData => (
                <MusicItem
                  key={eachData.id}
                  songsListData={eachData}
                  onDeleteResult={this.onDeleteResult}
                />
              ))}
            </UlList>
          )}
        </SubContainer>
      </MainContainer>
    )
  }
}

export default MusicHome
