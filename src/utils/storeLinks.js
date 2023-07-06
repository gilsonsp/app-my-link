import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar os links salvos.
export async function getLinksSave(key){
 const myLinks = await AsyncStorage.getItem(key);

 let linkSaves = JSON.parse(myLinks) || [];

 return linkSaves;

}

//Salvar um link no Storage! 
export async function saveLink(key, newLink){
 let linksStored = await getLinksSave(key);

 // Se tiver algum link salvo com esse mesmo ID / ou duplicado preciso ignorar.
    const hasLink = linksStored.some( Link => Link.id === newLink.id);

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE NA LISTA.');
        return; //Parar execução aqui.

        linksStored.push(newLink);
        await AsyncStorage.setItem(key, JSON.stringify(linksStored));
        console.log('LINK SALVO COM SUCESSO!');
    }
}

//Deletar algum link especifico.
export async function deleteLink(Links, id){

}