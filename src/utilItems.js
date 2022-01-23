function activeListItem(props){
 let listItem = document.getElementById(props.id);
 listItem.style.backgroundColor = 'red';
 return listItem;
}