let studentData = [];

createTable(studentData);
function createTable(data) {
  element = "";
  for (i = 0; i < data.length; i++) {
    element += `
    <tr>
    <td>${i + 1}</td>
    <td>${data[i].name}</td>
    <td>${data[i].age}</td>
    <td>${data[i].address}</td>
    <td><button class= btn onclick=editbtn('${
      data[i].name
    }')>edit</button><button class= btn onclick=deletebtn('${
      data[i].name
    }')>delete</button></td>
    </tr>`;
  }
  document.getElementById("tbody").innerHTML = element;
}
function add() {
  let inputName = document.getElementById("name").value;
  let inputAge = document.getElementById("age").value;
  let inputAddress = document.getElementById("address").value;
  let obj = {
    name: inputName,
    age: inputAge,
    address: inputAddress,
  };

  studentData.push(obj);

  createTable(studentData);
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("address").value = "";
}
function deletebtn(name) {
  let filterItem = studentData.filter((item) => item.name !== name);
  // studentData.splice(index, 1);
  createTable(filterItem);
  studentData = filterItem;
}
let selectedName;

function editbtn(name) {
  let editedData = studentData.find((item) => item.name === name);
  // console.log(editedData);
  selectedName = name;
  document.getElementById("name").value = editedData.name;
  document.getElementById("age").value = editedData.age;
  document.getElementById("address").value = editedData.address;
  document.getElementById("updtBtn").disabled = false;
}
function update() {
  let updateName = document.getElementById("name").value;
  let updateAge = document.getElementById("age").value;
  let updateAdress = document.getElementById("address").value;
  let selectedItem = studentData.findIndex(
    (item) => item.name === selectedName
  );
  console.log(selectedItem);

  studentData[selectedItem].name = updateName;
  studentData[selectedItem].age = updateAge;
  studentData[selectedItem].address = updateAdress;
  createTable(studentData);
  document.getElementById("age").value = "";
  document.getElementById("address").value = "";
  document.getElementById("name").value = "";
}
function handleChange(elemnt) {
  console.log(elemnt.value);
  let searchData = [];
  for (let i = 0; i < studentData.length; i++) {
    if (
      studentData[i].name.toLowerCase().includes(elemnt.value.toLowerCase())
    ) {
      searchData.push(studentData[i]);
    }
  }
  createTable(searchData);
}
