//Formdan alinan note verisinin tipi

export type NoteData = {
    title: string;
    markdown: string;
    tags: Tag[]
}

//Listelenecek note verisinin tipi
//notedata verisini miras alip uzerine yeni deger ekledik
export type Note = {
    id: string;
} & NoteData;



export type Tag = {
    label: string;
    value: string;
}

//Type'taki butun degerlerin opsiyonel olmasini istiyorsak
//Partial kullanip opsiyonel olmasini istedigimiz tipi 
//generic olarak gondeririz
//interface Test{
//    text:string;}
//const note:Partial<Tag>={}