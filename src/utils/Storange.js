import AsyncStorange from '@react-native-async-storage/async-storage';


//Buscar os favoritos
//Salvar um novo favorito
//Remover um favorito da lista

export async function GetFavorites(key) {
    const favorites = await AsyncStorange.getItem(key)
    return JSON.parse(favorites) || [];
}

export async function SaveFavorites(key, newItem) {
    let myFavorites = await GetFavorites(key)

    let hasItem = myFavorites.some(item => item.id === newItem.id)

    if (hasItem) {
        console.log("ESSE ITEM JÁ TEM MA LISTA");
        return;
    }
    myFavorites.push(newItem)

    await AsyncStorange.setItem(key, JSON.stringify(myFavorites))
    console.log("Salvo com Sucesso");
}

///
export async function RemoviItem(id) {
    let receipes = await GetFavorites("@appreceitas")

    let myFavorites = receipes.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorange.setItem("@appreceitas", JSON.stringify(myFavorites));
    console.log("ITEM DELETADO COM SUCESSO")
    return myFavorites;
}

export async function isFavorite(receipe) {
    let myReceipes = await GetFavorites("@appreceitas")
    const favorite = myReceipes.find(item => item.id === receipe.id)

    if (favorite) {
        return true;
    }

    return false;
}