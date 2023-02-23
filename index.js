// https://randomuser.me/api/?results=5000
async function fetchData() {
  try {
    response = await fetch("https://randomuser.me/api/?results=5000", {
      method: "GET",
    });
    // console.log(response);
    if (response.ok) {
      let data = await response.json();
      //   console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
    return new Error("data could not be fetched, error: " + error);
  }
}
// let users = {
//   results: [
//     {
//       gender: "female",
//       name: { title: "Miss", first: "ثنا", last: "جعفری" },
//       location: {
//         street: { number: 3820, name: "میدان حر" },
//         city: "اهواز",
//         state: "یزد",
//         country: "Iran",
//         postcode: 61292,
//         coordinates: { latitude: "14.3859", longitude: "69.0924" },
//         timezone: {
//           offset: "-5:00",
//           description: "Eastern Time (US & Canada), Bogota, Lima",
//         },
//       },
//       email: "thn.jaafry@example.com",
//       login: {
//         uuid: "50236b2f-954a-4076-8282-d6a606d96374",
//         username: "blacksnake449",
//         password: "kool",
//         salt: "vrQdDBXk",
//         md5: "bd5556d091a75cdb44672ca386b28b44",
//         sha1: "63cab2d78986121eb2b90750504054d1331da861",
//         sha256:
//           "c2927b65b85c855787c68b1195cc4b5415d9c2e91dc860d2cce52ca312bf3b5b",
//       },
//       dob: { date: "1982-08-29T08:52:37.895Z", age: 40 },
//       registered: { date: "2010-10-28T21:48:30.726Z", age: 12 },
//       phone: "048-54243800",
//       cell: "0999-005-6966",
//       id: { name: "", value: null },
//       picture: {
//         large: "https://randomuser.me/api/portraits/women/5.jpg",
//         medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
//         thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
//       },
//       nat: "IR",
//     },
//     {
//       gender: "female",
//       name: { title: "Ms", first: "Lena", last: "Rice" },
//       location: {
//         street: { number: 3176, name: "Cackson St" },
//         city: "Reno",
//         state: "Vermont",
//         country: "United States",
//         postcode: 36368,
//         coordinates: { latitude: "59.0019", longitude: "-170.7463" },
//         timezone: {
//           offset: "-4:00",
//           description: "Atlantic Time (Canada), Caracas, La Paz",
//         },
//       },
//       email: "lena.rice@example.com",
//       login: {
//         uuid: "0ff1099f-b9ff-49ce-851b-e47654459815",
//         username: "greenkoala454",
//         password: "angie",
//         salt: "CztsstJG",
//         md5: "44b7e1b24172aec48d3d126ad022eefa",
//         sha1: "88030ca0bd269711d0a532e8c6e972ded998ba33",
//         sha256:
//           "50abeec8f0eb3c8619c996732c8b757d5b89aa6180a284c7b0e69f7570d02a56",
//       },
//       dob: { date: "1956-03-13T20:27:42.149Z", age: 66 },
//       registered: { date: "2019-09-12T16:56:26.487Z", age: 3 },
//       phone: "(754) 621-5773",
//       cell: "(798) 328-1511",
//       id: { name: "SSN", value: "495-03-3575" },
//       picture: {
//         large: "https://randomuser.me/api/portraits/women/66.jpg",
//         medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
//         thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg",
//       },
//       nat: "US",
//     },
//     {
//       gender: "female",
//       name: { title: "Miss", first: "ثنا", last: "جعفری" },
//       location: {
//         street: { number: 3820, name: "میدان حر" },
//         city: "اهواز",
//         state: "یزد",
//         country: "Iran",
//         postcode: 61292,
//         coordinates: { latitude: "14.3859", longitude: "69.0924" },
//         timezone: {
//           offset: "-5:00",
//           description: "Eastern Time (US & Canada), Bogota, Lima",
//         },
//       },
//       email: "thn.jaafry@example.com",
//       login: {
//         uuid: "50236b2f-954a-4076-8282-d6a606d96374",
//         username: "blacksnake449",
//         password: "kool",
//         salt: "vrQdDBXk",
//         md5: "bd5556d091a75cdb44672ca386b28b44",
//         sha1: "63cab2d78986121eb2b90750504054d1331da861",
//         sha256:
//           "c2927b65b85c855787c68b1195cc4b5415d9c2e91dc860d2cce52ca312bf3b5b",
//       },
//       dob: { date: "1982-08-29T08:52:37.895Z", age: 40 },
//       registered: { date: "2010-10-28T21:48:30.726Z", age: 12 },
//       phone: "048-54243800",
//       cell: "0999-005-6966",
//       id: { name: "", value: null },
//       picture: {
//         large: "https://randomuser.me/api/portraits/women/5.jpg",
//         medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
//         thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
//       },
//       nat: "IR",
//     },
//     {
//       gender: "female",
//       name: { title: "Ms", first: "Lena", last: "Rice" },
//       location: {
//         street: { number: 3176, name: "Cackson St" },
//         city: "Reno",
//         state: "Vermont",
//         country: "United States",
//         postcode: 36368,
//         coordinates: { latitude: "59.0019", longitude: "-170.7463" },
//         timezone: {
//           offset: "-4:00",
//           description: "Atlantic Time (Canada), Caracas, La Paz",
//         },
//       },
//       email: "lena.rice@example.com",
//       login: {
//         uuid: "0ff1099f-b9ff-49ce-851b-e47654459815",
//         username: "greenkoala454",
//         password: "angie",
//         salt: "CztsstJG",
//         md5: "44b7e1b24172aec48d3d126ad022eefa",
//         sha1: "88030ca0bd269711d0a532e8c6e972ded998ba33",
//         sha256:
//           "50abeec8f0eb3c8619c996732c8b757d5b89aa6180a284c7b0e69f7570d02a56",
//       },
//       dob: { date: "1956-03-13T20:27:42.149Z", age: 66 },
//       registered: { date: "2019-09-12T16:56:26.487Z", age: 3 },
//       phone: "(754) 621-5773",
//       cell: "(798) 328-1511",
//       id: { name: "SSN", value: "495-03-3575" },
//       picture: {
//         large: "https://randomuser.me/api/portraits/women/66.jpg",
//         medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
//         thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg",
//       },
//       nat: "US",
//     },
//     {
//       gender: "female",
//       name: { title: "Miss", first: "ثنا", last: "جعفری" },
//       location: {
//         street: { number: 3820, name: "میدان حر" },
//         city: "اهواز",
//         state: "یزد",
//         country: "Iran",
//         postcode: 61292,
//         coordinates: { latitude: "14.3859", longitude: "69.0924" },
//         timezone: {
//           offset: "-5:00",
//           description: "Eastern Time (US & Canada), Bogota, Lima",
//         },
//       },
//       email: "thn.jaafry@example.com",
//       login: {
//         uuid: "50236b2f-954a-4076-8282-d6a606d96374",
//         username: "blacksnake449",
//         password: "kool",
//         salt: "vrQdDBXk",
//         md5: "bd5556d091a75cdb44672ca386b28b44",
//         sha1: "63cab2d78986121eb2b90750504054d1331da861",
//         sha256:
//           "c2927b65b85c855787c68b1195cc4b5415d9c2e91dc860d2cce52ca312bf3b5b",
//       },
//       dob: { date: "1982-08-29T08:52:37.895Z", age: 40 },
//       registered: { date: "2010-10-28T21:48:30.726Z", age: 12 },
//       phone: "048-54243800",
//       cell: "0999-005-6966",
//       id: { name: "", value: null },
//       picture: {
//         large: "https://randomuser.me/api/portraits/women/5.jpg",
//         medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
//         thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
//       },
//       nat: "IR",
//     },
//     {
//       gender: "female",
//       name: { title: "Ms", first: "Lena", last: "Rice" },
//       location: {
//         street: { number: 3176, name: "Cackson St" },
//         city: "Reno",
//         state: "Vermont",
//         country: "United States",
//         postcode: 36368,
//         coordinates: { latitude: "59.0019", longitude: "-170.7463" },
//         timezone: {
//           offset: "-4:00",
//           description: "Atlantic Time (Canada), Caracas, La Paz",
//         },
//       },
//       email: "lena.rice@example.com",
//       login: {
//         uuid: "0ff1099f-b9ff-49ce-851b-e47654459815",
//         username: "greenkoala454",
//         password: "angie",
//         salt: "CztsstJG",
//         md5: "44b7e1b24172aec48d3d126ad022eefa",
//         sha1: "88030ca0bd269711d0a532e8c6e972ded998ba33",
//         sha256:
//           "50abeec8f0eb3c8619c996732c8b757d5b89aa6180a284c7b0e69f7570d02a56",
//       },
//       dob: { date: "1956-03-13T20:27:42.149Z", age: 66 },
//       registered: { date: "2019-09-12T16:56:26.487Z", age: 3 },
//       phone: "(754) 621-5773",
//       cell: "(798) 328-1511",
//       id: { name: "SSN", value: "495-03-3575" },
//       picture: {
//         large: "https://randomuser.me/api/portraits/women/66.jpg",
//         medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
//         thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg",
//       },
//       nat: "US",
//     },
//   ],
// };
// let thead = document.getElementsByClassName("table-head");
let tbody = document.getElementById("table-body");
async function renderData() {
  try {
    let users = await fetchData();
    let tableData = users?.results?.slice(0, 10);
    // let tableData = users.results;
    console.log(tableData);
    let column = ["name", "gender", "country", "email", "dob", "age", "button"];
    tableData?.forEach((val, idx) => {
      let row = document.createElement("tr");
      for (let col of column) {
        let td = document.createElement("td");
        if (col === "name") {
          td.textContent = val["name"]["first"];
        } else if (col === "dob") {
          td.textContent = new Date(val[col]["date"]).toJSON().slice(0, 10);
        } else if (col === "age") {
          td.textContent = val["dob"][col];
        } else if (col === "country") {
          td.textContent = val["location"][col];
        } else if (col === "button") {
          let input = document.createElement("input");
          input.setAttribute("type", "button");
          input.setAttribute("value", "Delete row");
          input.setAttribute("onclick", "DeleteRowFunction(this)");
          input.setAttribute("class", "btn");
          td.appendChild(input);
        } else {
          td.textContent = val[col];
        }
        row.append(td);
      }
      tbody.appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}
renderData();
function DeleteRowFunction(event) {
  //   console.log(event);
  let td = event.parentNode;
  //   console.log(td);
  let tr = td.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);
}

const submitBtn = document.querySelector("form");
submitBtn.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  const tbody = document.getElementById("table-body");
  let tr = document.createElement("tr");
  console.log(data);
  console.log(Object.values(data));
  Object.values(data).forEach((val, idx) => {
    let td = document.createElement("td");
    td.textContent = val;
    tr.appendChild(td);
  });
  let td = document.createElement("td");
  let input = document.createElement("input");
  input.setAttribute("type", "button");
  input.setAttribute("value", "Delete row");
  input.setAttribute("onclick", "DeleteRowFunction(this)");
  input.setAttribute("class", "btn");
  td.appendChild(input);
  tr.appendChild(td);
  tbody.appendChild(tr);
  submitBtn.reset();
});
