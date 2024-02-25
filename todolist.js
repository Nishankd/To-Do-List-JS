window.onload = () => {
    const form1 = document.querySelector("#addForm");
    let items = document.getElementById("items");
    let submit = document.getElementById("submit");

    let editItem = null;

    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeOrEditItem);
}

function addItem(e) {
    e.preventDefault();

    if (submit.value !== "Submit") {
        editItem.target.parentNode.childNodes[0].data = document.getElementById("item").value;
        submit.value = "Submit";
        document.getElementById("item").value = "";

        showSuccessMessage("Text edited successfully");

        return false;
    }

    let newItem = document.getElementById("item").value.trim();
    if (newItem === "") return false;

    let li = document.createElement("li");
    li.className = "list-group-item";

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn-danger btn btn-sm float-right delete";
    deleteButton.appendChild(document.createTextNode("Delete"));

    let editButton = document.createElement("button");
    editButton.className = "btn-success btn btn-sm float-right edit";
    editButton.appendChild(document.createTextNode("Edit"));

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    items.appendChild(li);

    document.getElementById("item").value = "";
}

function removeOrEditItem(e) {
    e.preventDefault();

    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure?")) {
            let li = e.target.parentNode;
            items.removeChild(li);

            showSuccessMessage("Text deleted successfully");
        }
    }

    if (e.target.classList.contains("edit")) {
        document.getElementById("item").value = e.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
    }
}

function toggleButton(ref, btnId) {
    document.getElementById(btnId).disabled = ref.value.trim() === "";
}

function showSuccessMessage(message) {
    document.getElementById("lblsuccess").innerHTML = message;
    document.getElementById("lblsuccess").style.display = "block";

    setTimeout(function () {
        document.getElementById("lblsuccess").style.display = "none";
    }, 3000);
}


