export let collectionImg= ['./collection/content_img_1.png','./collection/content_img_2.png',
'./collection/content_img_3.png','./collection/content_img_4.png','./collection/content_img_5.png',
'./collection/content_img_6.png','./collection/content_img_7.png','./collection/content_img_8.png',
'./collection/content_img_9.png','./collection/content_img_10.png','./collection/content_img_11.png',
'./collection/content_img_12.png','./collection/content_img_13.png','./collection/content_img_14.png',
'./collection/content_img_15.png','./collection/content_img_16.png',]

export let date = new Date();
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0'); 
let yyyy = date.getFullYear();

date = dd + '/' + mm + '/' + yyyy;

