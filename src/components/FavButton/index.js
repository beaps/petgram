import React from 'react'
import { Button, SvgContainer, LikesContainer } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

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
