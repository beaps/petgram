import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsWithQuery } from '../container/ListOfPhotoCardsWithQuery'

export const Home = ({ categoryId }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={categoryId} />
    </Fragment>
  )
}
