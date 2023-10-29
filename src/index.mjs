import "./styles.css";

const onClickAdd =() => {
  //テキストボックスの値を取得後し、初期化
  //alert();
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value ="";
 
  //alert(inputText);

  createIncompleteList(inputText);

}

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

//未完了リストに追加する関数
const createIncompleteList = (inputText) => {

  //div生成
  const　div = document.createElement("div");
  div.className = "list-row";
  //console.log(div);
 
  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;
  //console.log(li);
 
  const completeButton = document.createElement("button");
  completeButton.innerText ="完了";
  completeButton.addEventListener("click",() => {
    // alert("完了");
    //???? ↓は無くても動く//
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する元
    const addTarget = completeButton.parentNode;
    const text =addTarget.firstElementChild.innerText;
    //console.log(text);
    //divを初期化
    addTarget.textContent = null;
    //console.log(addTarget);
    //li作成
    const li = document.createElement("li");
    li.innerText = text;
    //戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押されたら戻るボタンの親タグ
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      //console.log(text);
      createIncompleteList(text);
    })

    //divに格納
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //console.log(addTarget);

    //完了リストに追加？移動？
    document.getElementById("complete-list").appendChild(addTarget);
 
    //押された完了ボタンの親divを未完了から削除
    //const deleteTarget = completeButton.parentNode;
    //console.log(deleteTarget);
    //document.getElementById("incomplete-list").removeChild(deleteTarget);
    //deleteFromIncompleteList(completeButton.parentNode);

  }); 

  const deleteButton = document.createElement("button");
  deleteButton.innerText ="削除";
  deleteButton.addEventListener("click",() => {
    // alert("削除");
    //押された削除ボタンの親divを未完了から削除
    //const deleteTarget = deleteButton.parentNode;
    //console.log(deleteTarget);
    //document.getElementById("incomplete-list").removeChild(deleteTarget);
    deleteFromIncompleteList(deleteButton.parentNode);
  }); 
  //console.log(deleteButton);

  //divへセット
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //console.log(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

}


document
  .getElementById("add-button")
  .addEventListener("click" , () => onClickAdd());


// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
