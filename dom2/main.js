window.onload = () => {
  let userChoice = {};
  // Register Event in the Dom
  document
    .getElementById("name")
    .addEventListener("change", (event) => handleEvent(event, "name"));
  document
    .getElementById("fruit")
    .addEventListener("change", (event) => handleEvent(event, "fruit"));
  document
    .getElementById("vegetable")
    .addEventListener("change", (event) => handleEvent(event, "vegetable"));
  document
    .getElementById("myButton")
    .addEventListener("click", () => addToList());

  //  Create HandleEvent Function
  const handleEvent = (e, type) => {
    switch (type) {
      case "name":
        userChoice["name"] = e.target.value;
        return;
      case "fruit":
        return (userChoice["fruit"] = e.target.checked);
      case "vegetable":
        return (userChoice["vegetable"] = e.target.checked);
      default:
        e.target.value = "";
        return;
    }
  };


  // Create Add Function
  const addToList = () => {
    const { fruit, vegetable, name } = userChoice;
    const addToElement = (name, idx) => {
      const unOrderedList = document.querySelectorAll("ol");
      console.log('Unordered', unOrderedList)
      const list = document.createElement("li");
      const text = document.createTextNode(name);
      list.append(text);
      unOrderedList[idx].appendChild(list);
    };
    if (fruit) return addToElement(name, 0);
    if (vegetable) return addToElement(name, 1);
  };
};
