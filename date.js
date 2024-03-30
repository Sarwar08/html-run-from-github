  // function to update the date and time
  function updateDateTime(){
    // Create date instance of object Date() - constructor
    const date = new Date();
    // get the current date and time as string
    const currentDateTime = date.toString();
    //get current hour
    const currentHour = date.getHours();
    //get current minute
    const currentMinute = date.getMinutes();
    // get current second
    const currentSecond = date.getSeconds();
    // get current milisecond
    const currentMilisecond = date.getMilliseconds();
    
    // Put it on web page using DOM
    document.querySelector('.js-date-time')
      .innerHTML = `${currentHour} Hours, ${currentMinute} Minutes, ${currentSecond} Seconds, ${currentMilisecond} Miliseconds`;
  }

  setInterval(updateDateTime, 1000);