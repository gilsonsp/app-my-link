import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';
import { Container, Title, ListLinks } from './styles';
import ListItem from '../../components/ListItem';

export default function MyLinks(){
    return(
        <Container>
         <StatusBarPage
           barStyle="light-content"
           background="#132742" 
        />

        <Menu />

        <Title>Meus Links</Title>
        
        <ListLinks
        data={[ {id:1, link: 'teste.com'}, {id:2, link: 'teste.com'} ]}
        keyExtractor={ (item) => String(item.id) } 
        renderItem={ ({ item }) => <ListItem data={item} /> } 
        contentContainerStyle={{ paddingBottom: 22 }}
        showVerticalScrollIndicator={false}
        />
           
        </Container>
    )
}
