const deleteFromIncompleteList = (e) => {
  document.getElementById("incomplete-list").removeChild(e);
};

const deleteFromCompleteList = (e) => {
  document.getElementById("complete-list").removeChild(e);
};

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了のTODO
const createIncompleteList = (e) => {
  //li,div,p作成
  const createLi = document.createElement("li");
  const creatediv = document.createElement("div");
  creatediv.className = "list-row";
  const createP = document.createElement("p");
  createP.innerText = e;

  //button作成
  const createCompleteButton = document.createElement("button");
  createCompleteButton.innerText = "完了";
  // 完了ボタン
  createCompleteButton.addEventListener("click", () => {
    // 未完了のTODOからテキストを取得
    const completeList = createCompleteButton.closest("li");
    const text = completeList.querySelector("p").innerText;
    // 要素を削除
    deleteFromIncompleteList(completeList);

    // 完了のTODOの要素を作成
    const createLi = document.createElement("li");
    const creatediv = document.createElement("div");
    creatediv.className = "list-row";
    const createP = document.createElement("p");
    createP.innerText = text;
    const createBackButton = document.createElement("button");
    createBackButton.innerText = "戻す";

    // 戻すボタン
    createBackButton.addEventListener("click", () => {
      // 要素を削除
      const backTarget = createBackButton.closest("li");
      deleteFromCompleteList(backTarget);
      // 未完了のTODOに要素を戻す
      createIncompleteList(text);
    });

    // 子要素に各要素を設定
    createLi.appendChild(creatediv);
    creatediv.appendChild(createP);
    creatediv.appendChild(createBackButton);
    // 完了のTODOに要素を追加
    document.getElementById("complete-list").appendChild(createLi);
  });

  // 削除ボタン
  const createDeleteButton = document.createElement("button");
  createDeleteButton.innerText = "削除";
  createDeleteButton.addEventListener("click", () => {
    // const deleteTarget = createDeleteButton.parentNode.parentNode;
    // または
    const deleteTarget = createDeleteButton.closest("li");
    deleteFromIncompleteList(deleteTarget);
  });

  // 子要素に各要素を設定
  createLi.appendChild(creatediv);
  creatediv.appendChild(createP);
  creatediv.appendChild(createCompleteButton);
  creatediv.appendChild(createDeleteButton);

  // 未完了のTODOに要素を追加
  document.getElementById("incomplete-list").appendChild(createLi);
};

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => onClickAdd());
