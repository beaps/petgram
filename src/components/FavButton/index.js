import React from 'react'
import { Button, SvgContainer, LikesContainer } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { PropTypes } from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <SvgContainer>
        <Icon size='23px' />
      </SvgContainer>
      <LikesContainer>
        {likes} likes
      </LikesContainer>
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
