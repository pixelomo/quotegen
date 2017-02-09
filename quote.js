var quoteMaker = {
        data : {
            'services':null,
            'bedrooms':null,
            'furnishing':null,
            'quoteString':''
        },
        servicesListener : function(){
           this.data.services = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
        },
        bedroomsListener : function(){
           this.data.bedrooms = document.getElementById('bedrooms').options[document.getElementById('bedrooms').selectedIndex].text;
        },
        furnishingListener : function(){
           this.data.furnishing = document.getElementById('furnishing').options[document.getElementById('furnishing').selectedIndex].text;
        },
        changeData : function(divObj){
            this.data.quoteString='';
            if( divObj.id == 'service' ){
                this.servicesListener();
            }else if( divObj.id == 'bedrooms' ){
                this.bedroomsListener();
            }else if( divObj.id == 'furnishing' ){
                this.furnishingListener();
            }
            this.updateQuote();
        },
    updateQuote : function() {
      if (this.data.services == "Inventory" &&this.data.bedrooms =="1" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £70"; 
      if (this.data.services == "Inventory" &&this.data.bedrooms =="2" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £75";
      if (this.data.services == "Inventory" &&this.data.bedrooms =="3" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £80";
      if (this.data.services == "Inventory" &&this.data.bedrooms =="4" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £85";
      if (this.data.services == "Inventory" &&this.data.bedrooms =="5" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £90";
      if (this.data.services == "Inventory" &&this.data.bedrooms =="6+" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £100";

      if (this.data.services == "Inventory" &&this.data.bedrooms =="1" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £60"; 
      if (this.data.services == "Inventory" &&this.data.bedrooms =="2" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £65";
      if (this.data.services == "Inventory" &&this.data.bedrooms =="3" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £70";
      if (this.data.services == "Inventory" &&this.data.bedrooms =="4" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £75";
      if (this.data.services == "Inventory" &&this.data.bedrooms =="5" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £80";
      if (this.data.services == "Inventory" &&this.data.bedrooms =="6+" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £85";

      if (this.data.services == "Inventory" &&this.data.bedrooms =="1" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £55"; 
      if (this.data.services == "Inventory" &&this.data.bedrooms =="2" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £60";
      if (this.data.services == "Inventory" &&this.data.bedrooms =="3" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £65";
      if (this.data.services == "Inventory" &&this.data.bedrooms =="4" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £70";
      if (this.data.services == "Inventory" &&this.data.bedrooms =="5" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £75";
      if (this.data.services == "Inventory" &&this.data.bedrooms =="6+" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £80";


      if (this.data.services == "Check-In" &&this.data.bedrooms =="1" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £50"; 
      if (this.data.services == "Check-In" &&this.data.bedrooms =="2" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £55";
      if (this.data.services == "Check-In" &&this.data.bedrooms =="3" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £60";
      if (this.data.services == "Check-In" &&this.data.bedrooms =="4" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £65";
      if (this.data.services == "Check-In" &&this.data.bedrooms =="5" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £70";
      if (this.data.services == "Check-In" &&this.data.bedrooms =="6+" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £75";

      if (this.data.services == "Check-In" &&this.data.bedrooms =="1" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £40"; 
      if (this.data.services == "Check-In" &&this.data.bedrooms =="2" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £45";
      if (this.data.services == "Check-In" &&this.data.bedrooms =="3" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £50";
      if (this.data.services == "Check-In" &&this.data.bedrooms =="4" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £55";
      if (this.data.services == "Check-In" &&this.data.bedrooms =="5" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £60";
      if (this.data.services == "Check-In" &&this.data.bedrooms =="6+" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £65";

      if (this.data.services == "Check-In" &&this.data.bedrooms =="1" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £35"; 
      if (this.data.services == "Check-In" &&this.data.bedrooms =="2" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £40";
      if (this.data.services == "Check-In" &&this.data.bedrooms =="3" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £45";
      if (this.data.services == "Check-In" &&this.data.bedrooms =="4" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £50";
      if (this.data.services == "Check-In" &&this.data.bedrooms =="5" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £55";
      if (this.data.services == "Check-In" &&this.data.bedrooms =="6+" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £60";


      if (this.data.services == "Check-Out" &&this.data.bedrooms =="1" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £55"; 
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="2" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £60";
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="3" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £65";
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="4" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £70";
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="5" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £75";
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="6+" && this.data.furnishing == "Furnished") 
         this.data.quoteString = "= £80";

      if (this.data.services == "Check-Out" &&this.data.bedrooms =="1" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £45"; 
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="2" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £50";
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="3" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £55";
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="4" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £60";
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="5" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £65";
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="6+" && this.data.furnishing == "Part Furnished") 
         this.data.quoteString = "= £70";

      if (this.data.services == "Check-Out" &&this.data.bedrooms =="1" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £40"; 
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="2" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £45";
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="3" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £50";
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="4" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £55";
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="5" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £60";
      if (this.data.services == "Check-Out" &&this.data.bedrooms =="6+" && this.data.furnishing == "Unfurnished (except for white goods)") 
         this.data.quoteString = "= £65";
    document.getElementById("quote").innerHTML=this.data.quoteString;
},
        init: function(){

        }   
    }
    quoteMaker.init();
