// array- search

const data = [
  "item-1",
  "item-2",
  "item-3",
  "item-4",
  "item-5",
  "item-6",
  "item-7",
  "item-8",
  "item-9",
];

var list = document.getElementById("displayData");

data.map((item) => {
  list.innerHTML += item + "<br>";
});

const handleSearch = () => {
  var query = document.querySelector("input").value;
  var filterData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  if (filterData.length !== 0) {
    list.innerHTML = "";
    filterData.map((item) => {
      list.innerHTML += item + "<br>";
    });
  }

  console.log(filterData);
};
