import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { 
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture 
} from './styles';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/185188120/original/b084c38d746e1cc36e133e7557c06c4e47a45198/create-responsive-websites-using-html-css-javascript-react.jpeg" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/117857030?v=4"/>
                <div>
                    <h4>Ruka</h4>
                    <p>Há 13 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }