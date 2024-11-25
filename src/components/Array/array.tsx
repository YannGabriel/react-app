function ListaNova({ itens }: any) {
  return (
    <>
      <h3>Lista de tecnologias</h3>
      {itens.length > 0 ? ( //se a lista for maior que 0
        itens.map((item: any, index: number) => ( //pega os itennsn da lista e seu número na mesma
          <p key={index}>{item}</p> //retorna o item e key
        ))) 
        : ( //else
      <p>Não há itens na lista!</p>
      )}
    </>
  );
}

export default ListaNova;
