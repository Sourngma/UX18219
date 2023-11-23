    const scriptURL = 'https://script.google.com/macros/s/AKfycbxdxikdScNqnFGhfyDnENxQwBYwPMB1YZY2XDSeT1o02DArmiIO16ZLOpgikPhsKRba/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    const scriptURL2 = 'https://script.google.com/macros/s/AKfycbw7Y0SZV74YDMNrBmqYpSJaUEBT4_4aspMcZxs65cYrzzGGDva_KtUA4_fq5X9q3roS/exec'
    const form2 = document.forms['contact-to-google-sheet']
    const msg2 = document.getElementById("msg2")
   
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Thank you For Subscribing by 18219 Sourng"
            setTimeout(function(){
                msg.innerHTML = "We specialize in web development"
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
    form2.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
        .then(response => {
            msg2.innerHTML = "Thanks for your contact details by 18219 Sourng"
            setTimeout(function(){
                msg2.innerHTML = "contact"
            }, 5000)
            form2.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
    
