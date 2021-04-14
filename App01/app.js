/////////////////////////////MODALS///
$(()=>{
  const $openBtn = $("openModal")
  const $modalText =$('#modal-textbox')
  const $modal = $("#modal")
  const $closeBtn = $("#close")

  //////modal functions
  const openModal = () => {
    $modal.css("display", "block");
  };
  const closeModal = () => {
    $modal.css("display", "none");
  };
  $openBtn.on("click", openModal);
  $closeBtn.on("click", closeModal);

////////////////////////event handler
  $('.button').on('click', () => {
    event.preventDefault()
    let $userInput = $('#quote-category option:selected').val()
    console.log($userInput);
    openModal()
  ////////////////////////////ajax request
  $.ajax({
    url:`https://api.quotable.io/random?tags=${$userInput.toLowerCase()}`,
  }).then(
      (data)=>{

        let $modalContent= $('#modal-textbox').text(`"${data.content}"`)
        let $authDD = $('<dd>')
        let $author = $('<dd>').text(`-- ${data.author}.`).addClass('Author').appendTo($modalContent)

          console.log(data);
      },
      ()=>{
        console.log('NOPE!!');
      }
    );
  })
})
