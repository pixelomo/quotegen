var quoteMaker = {
        data : { 
            'services':    null,
            'bedrooms':    null,
            'furnishing':  null,
            'quoteString': ''
        },
   
  function servicesListener(){
     this.data.services = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
  },
  
  function bedroomsListener(){
     this.data.bedrooms = document.getElementById('bedrooms').options[document.getElementById('bedrooms').selectedIndex].text;
  },

  function furnishingListener(){
     this.data.furnishing = document.getElementById('furnishing').options[document.getElementById('furnishing').selectedIndex].text;
  },

  function changeData(divObj){

      this.data.quoteString = '';

      if( divObj.id == 'service' ){
          this.servicesListener();
      } else if ( divObj.id == 'bedrooms' ){
          this.bedroomsListener();
      } else if ( divObj.id == 'furnishing' ){
          this.furnishingListener();
      }
      this.updateQuote();
  },

  function updateQuote(service, rooms, furnished){

    const price = 35,
          service = this.data.services,
          rooms = this.data.bedrooms,
          furnished = this.data.furnishing;

    // Check-In 50 furnished 40 part furnished 35 unfurnished
    // Check-Out 55 furnished 45 part furnished 40 unfurnished
    // Inventory 70 furnished 60 part furnished 55 unfurnished
    switch(service) {
      case 'Check-In':
          price = 35;
          break;
      case 'Check-Out':
          price = 40;
          break;
      case 'Inventory':
          price = 55;
          break;
    }
    // add 5 per room, from 1-6 rooms
    switch(rooms) {
      case 1:
          price = price;
          break;
      case 2:
          price = price + 5;
          break;
      case 3:
          price = price + 10;
          break;
      case 4:
          price = price + 15;
          break;
      case 5:
          price = price + 20;
          break;
      case 6:
          price = price + 25;
          break;
    }

    switch(furnished) {
      case 'Unfurnished':
          price = price + 5;
          break;
      case 'Part Furnished':
          price = price + 10;
          break;
      case 'Furnished':
          price = price + 15;
          break;
    }

    this.data.quoteString = price;

    document.getElementById("quote").innerHTML = this.data.quoteString;
  },

  function init(){}

}

quoteMaker.init();
