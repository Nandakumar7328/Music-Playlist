import {AiOutlineDelete} from 'react-icons/ai'
import {
  LiContainer,
  ImageTitleContainer,
  Image,
  NameContainer,
  Name,
  Genre,
  RunTimeAndButton,
} from './styledComponents'
import './index.css'

const MusicItem = props => {
  const {songsListData, onDeleteResult} = props
  const {imageUrl, name, genre, duration, id} = songsListData

  const onClickDeate = () => {
    onDeleteResult(id)
  }

  return (
    <LiContainer>
      <ImageTitleContainer>
        <Image src={imageUrl} alt="track" />
        <NameContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameContainer>
      </ImageTitleContainer>
      <RunTimeAndButton>
        <Name>{duration}</Name>
        <button
          className="btn-delete"
          testid="delete"
          type="button"
          onClick={onClickDeate}
        >
          <AiOutlineDelete color="#cbd5e1" font-size="30px" />
        </button>
      </RunTimeAndButton>
    </LiContainer>
  )
}

export default MusicItem
