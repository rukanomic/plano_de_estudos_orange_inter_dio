import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={92} nome="Ruka" image="https://avatars.githubusercontent.com/u/117857030?v=4"/>
                <UserInfo percentual={55} nome="Ruka" image="https://avatars.githubusercontent.com/u/117857030?v=4"/>
                <UserInfo percentual={81} nome="Ruka" image="https://avatars.githubusercontent.com/u/117857030?v=4"/>
                <UserInfo percentual={62} nome="Ruka" image="https://avatars.githubusercontent.com/u/117857030?v=4"/>
                <UserInfo percentual={39} nome="Ruka" image="https://avatars.githubusercontent.com/u/117857030?v=4"/>
            </Column>
        </Container>
    </>)
}

export { Feed }