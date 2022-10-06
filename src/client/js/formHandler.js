function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let inputDate = document.getElementById("date").value;

  Client.checkForDate(inputDate);

  console.log("Form Submitted");
  fetch(`/pictures/${inputDate}`)
    .then((res) => {
      return res.json();
    })
    .then(function (picture) {
      console.log(picture);
      const title = document.createElement("p");
      title.innerHTML = picture.title;
      const date = document.createElement("div");
      date.setAttribute("class", "pictureDate");
      date.innerHTML = inputDate;
      const image = document.createElement("img");
      image.setAttribute("src", picture.url);
      image.setAttribute("alt", "Nasa Picture of the Day");
      const explanation = document.createElement("p");
      explanation.innerHTML = picture.explanation;

      document
        .getElementById("results")
        .replaceChildren(date, title, image, explanation);
    });
}

export { handleSubmit };
