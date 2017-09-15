function handleFiles(file){
        if (window.FileReader) {
            // FileReader are supported.
            getAsText(file[0]);
        } else {
            alert('FileReader are not supported in this browser.');
        }

      }

    function getAsText(fileToRead) {
      var reader = new FileReader();
      // Read file into memory as UTF-8
      reader.readAsText(fileToRead);
      // Handle errors load
      reader.onload = loadHandler;
      reader.onerror = errorHandler;
    }

    function loadHandler(event) {
      var csv = event.target.result;
      processData(csv);
    }

    function processData(csv) {
        var allTextLines = csv.split(/\r\n|\n/);
        var lines = [];
        var departments = [];
        console.log("AllTextLines Length = " + allTextLines.length);
        for (var i=0; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
                var tarr = [];
                var dep;
                for (var j=0; j<data.length; j++) {
                    if(j == 1){
                      if(departments[data[1]]){
                        departments[data[1]][0] = departments[data[1]][0] + ", " + data[0];
                        dep = data[1];
                      }else{
                        departments[data[1]] = new Array(106);
                        departments[data[1]][0] = data[0];
                        departments[data[1]][1] = data[4]
                        dep = data[1];
                      }
                    }

                    if(j > 4){
                      if(departments[dep][j] == undefined || departments[dep][j] == ""){
                        departments[dep][j] = data[j];
                      }
                    }

                    //tarr.push(data[j]);
                }
                //lines.push(tarr);
            // console.log(allTextLines[i]);
        }
      console.log(departments);
      buildHTML(departments);
    }

    function getArray(){
      return [ "All exits are accessible and clearly marked, illuminated, and visible.", "All fire/smoke doors are operational, unobstructed, and not propped open.", "Corridors are free of obstructions and storage.", "Fire extinguishers are fully operational and tagged with annual certification and monthly inspections.", "Fire alarm pull stations, fire extinguishers, and medical gas valves are unobstructed and accessible.", "Sprinkler heads are clear of storage within 18 inches. Escutcheon plates in place.",
      "Laundry chute doors are functional and laundry room doors are locked.", "Oxygen bottles are properly stored/secured/segregated within a smoke compartment.", "Alcohol based hand sanitizers are properly mounted on walls not closer that one inch from electrical outlets.", "Staff have knowledge of \"RACE\", \"PASS\", medical gas shut-off procedures, and evacuation procedures.", "Staff knows location of fire alarm pull stations, fire extinguishers, and medical gas shut-off valves.", "Penetrations are sealed and ceiling tiles are in place.",
      "Decorations and furnishings are in compliance with the fire code.", "Are janitor closets and other rooms with chemicals / RMW secured and stored correctly?", "Are chemicals and hazardous materials apropriately stored and labelled?", "Is medical waste stored in properly labeled bags and containers? Properly stored, segregated and disposed?", "Are biohazardous waste bulk storage areas secured except to essential personnel?", "Are compressed gases properly stored with valve protections caps in place (if necessary), secured separated and identified?", "Are emergency eyewash stations and showers accessible, operational and inspected weekly?", "Are appropriate gloves, goggles and other PPE available and used?", "Are chemical spill kits available for hazardous chemicals in the area?", "Can staff explain what is a SDS?", "Can staff explain how to obtain a SDS?", "Does staff know where the oxygen shut off valve is? And who is responsible for shutting off in event of an emergency?",
      "Does staff know how to properly dispose of RMW and Syringes?", "Does staff know how to properly dispose of pharmaceutical waste?", "Are there are no sterile supplies stored in the soiled utility room?", "Are soiled and clean equipment and supplies being stored appropriately with adequate separation?", "Are food, drink and personal items not in patient care areas?", "Are there no open bottles of solutions found?", "Is Employee food and patient food being stored in separate refrigerators and is it labelled and dated?", "Are all hampers and linen carts covered?",
      "Are stretchers, IV poles and other mobile equipment visually clean and dust free?", "Is the equipment in patient care areas \"tape free\"?", "Are medications dated and labeled? Are all IV & Tubings labeled appropriately?", "Are there no outside shipping boxes being used for storage?", "There is an adequate splash zone with no storage around the sink?", "Are cabinets under sink are free from storage?", "Does the bottom shelf on all carts and storage racks have a solid surface?", "Are all patient supplies within expiration dates?",
      "Are all pressure differentials appropriate and is the Ball in the Wall reading correct?", "Are the inspection tags current with date of next inspection?", "Is medical equipment clean, identified and stored properly? Is it in good overall condition?", "Are crash carts or carts with sharps and meds locked?", "Are code cart logs documented consistently and checked at least daily?", "Are medical equipment consumables within expiration dates?", "Are blanket warmers and fluid warmers temperatures withing range? Are logs complete for fluid warmers?",
      "Are plugs, cords, switches, outlets and power cords free from visible damage?", "Are all power cords hospital grade?", "Has the AED been inspected and is prepared in event of an emergency?", "Are all workstations on wheels in good overall condition?", "Are all electrical beds free from visible damage?", "Is temperature in medication refrigerators checked daily?", "Are thermometers in all refrigerators with alarms on and are the temperature logs complete?", "Are the floors and carpets in good physical condition? Clean and dry? Free from fall/trip hazards?",
      "Are wet floor signs used properly?", "Are all cords and wires managed properly?", "Are the walls painted and in good physical condition?", "Are electrical plates /covers in place and in good condition?", "Are ceiling tiles in place and in good condition, free from dirt, dust and/or stains?", "Are vents and air ducts dust free?", "Are there any boxes, storage on the floor?", "Are storage areas and work areas neat, clean and well lit?", "Are stairwells free of obstruction?", "Are soiled utility rooms sanitary?", "Are restroom areas clean and orderly?",
      "Are cleaning agents properly stored?", "Are refrigerators clean? And ice machines?",
      "Is lighting adequate?", "Is furniture in good repair?", "Does staff know how to access safety manuals?", "Can staff name their safety officers?", "Are all employees wearing ID badges in plain view?", "Are \"Breakaway\" lanyards in use if necessary?", "Are all computers that are not in use, logged out?", "Can staff explain the procedure to get help in the event of a security emergency?", "Can staff explain procedures for Code Lockdown? Location of safe room and panic button (if available)?", "Can staff explain the procedures for adopt an exit (Code Pink, Code Adam, Eloped or endangered missing person)?", "Are security measures in place and can staff explain them and their role in providing security for patients?", "Can staff explain procedures for a Code Green?", "Do staff know where to find a copy of the emergency management plan, department specific plan, Red Centrex (system failure) phone(s) and directory?",
      "If a building evacuation is announced , what would you do, where is your staging area, where is the nearest smoke compartment evacuation area?", "Are emergency power outlets clearly marked by red covers or labelled outlets and are they being used for critical equipment only?", "Are mechanical/electrical rooms or exposed distribution panels kept locked, except to essential personnel?", "Does the area only use approved or medical grade powerstrips and are they properly tied back and secured to avoid trip hazards?",
      "Are medical gas zones and main valves marked to identify the area served?", "Are all medical gas valves accessible for immediate access and not blocked?", "Is the temperature and humidity monitored in each OR? And clean storage rooms if required? Is there a log book?", "Are temperatures maintained between 68-73 degrees and is relative humidity levels maintained between 35-60 percent and is it recorded in the logbook?", "Are all areas pressure relationships functioning properly by observing the ball in the wall? Are all OR's positive pressure to corridors?",
      "Can staff describe who is authorized to shut off medical gases in event of an emergency?", "Are door latches functioning properly for the stair towers and barrier doors?", "All initial inspection stickers are on microwaves, toasters, refrigerators, etc?", "Additional Comments?"];

    }

    function buildHTML(depts){

      var track = 1;
      for(key in depts){

        var questions = getArray();
        console.log(depts[key]);

        var divElem = document.createElement('div');
        divElem.setAttribute('class', 'bod');
        divElem.setAttribute('id', track);

        var newElem = document.createElement('img');
        newElem.setAttribute('class', 'img1');
        newElem.setAttribute('src', 'cmc.jpg');
        divElem.appendChild(newElem);

        newElem = document.createElement('h2');
        newElem.innerHTML = "<center>Occupational Safety <br/>- EOC Checklist</center>";
        divElem.appendChild(newElem);

        newElem = document.createElement('h3');
        newElem.innerHTML = "Location : " + key;
        divElem.appendChild(newElem);

        newElem = document.createElement('h3');
        newElem.innerHTML = "Participants : " + depts[key][0];
        divElem.appendChild(newElem);

        newElem = document.createElement('h3');
        newElem.innerHTML = "Date : " + depts[key][1];
        divElem.appendChild(newElem);

        newElem = document.createElement('br');
        divElem.appendChild(newElem);

        newElem = document.createElement('hr');
        divElem.appendChild(newElem);

        // document.getElementById('location').innerHTML = "Location : " + key;
        // document.getElementById('who').innerHTML = "Participants : " + depts[key][0];
        // document.getElementById('date').innerHTML = "Date : " + depts[key][1];
        // var doc = document.getElementById('bod');
        for(var i = 5;i<depts[key].length;i++){
          if(i == 5){//Fire Safety
            newElem = document.createElement('h2');
            newElem.setAttribute('class', 'title');
            newElem.innerHTML = "FIRE SAFETY CHECKLIST";
            divElem.appendChild(newElem);
          }else if(i == 19){//Hazardous Materials and Waste
            newElem = document.createElement('h2');
            newElem.setAttribute('class', 'title');
            newElem.innerHTML = "HAZARDOUS MATERIALS AND WASTE CHECKLIST";
            divElem.appendChild(newElem);
          }else if(i == 33){//Infection Prevention
            newElem = document.createElement('h2');
            newElem.setAttribute('class', 'title');
            newElem.innerHTML = "INFECTION PREVENTION CHECKLIST";
            divElem.appendChild(newElem);
          }else if(i == 49){//Medical Equipment Management
            newElem = document.createElement('h2');
            newElem.setAttribute('class', 'title');
            newElem.innerHTML = "MEDICAL EQUIPMENT MANAGEMENT CHECKLIST";
            divElem.appendChild(newElem);
          }else if(i == 63){//Safety Management
            newElem = document.createElement('h2');
            newElem.setAttribute('class', 'title');
            newElem.innerHTML = "SAFETY MANAGEMENT CHECKLIST";
            divElem.appendChild(newElem);
          }else if(i == 82){//Security
            newElem = document.createElement('h2');
            newElem.setAttribute('class', 'title');
            newElem.innerHTML = "SECURITY CHECKLIST";
            divElem.appendChild(newElem);
          }else if(i == 93){//Utility Management
            newElem = document.createElement('h2');
            newElem.setAttribute('class', 'title');
            newElem.innerHTML = "UTILITY MANAGEMENT CHECKLIST";
            divElem.appendChild(newElem);
          }else if(i == 105){//Additional Comments
            newElem = document.createElement('h4');
            newElem.setAttribute('class', 'question');
            newElem.innerHTML = "Additional Comments?";
            divElem.appendChild(newElem);
            newElem = document.createElement('i');
            newElem.innerHTML = depts[key][i];
            divElem.appendChild(newElem);
            newElem = document.createElement('br');
            divElem.appendChild(newElem);
            newElem = document.createElement('br');
            divElem.appendChild(newElem);
            newElem = document.createElement('br');
            divElem.appendChild(newElem);
          }else{//Answers to questions
            newElem = document.createElement('h4');
            newElem.setAttribute('class', 'question');
            newElem.innerHTML = questions[0];
            questions.shift();
            divElem.appendChild(newElem);
            newElem = document.createElement('i');
            if(depts[key][i] == ""){
              newElem.innerHTML = " No Answer "
            }else{
              newElem.innerHTML = depts[key][i];
            }
            divElem.appendChild(newElem);
            newElem = document.createElement('br');
            divElem.appendChild(newElem);


          }
        }
        document.body.appendChild(divElem);
        newElem = document.createElement('button');
        var str = "exporter('#" + track + "', '"+ key+ " " + depts[key][1] + "')";
        track+=2;
        newElem.setAttribute('onclick', str);
        newElem.setAttribute('src', 'cmc.jpg');
        newElem.innerHTML = "Export PDF";
        document.body.appendChild(newElem);

      }
    }

    function exporter(name, key){
      var pdf = jsPDF('p', 'pt', 'letter');
      var soure = $(name)[0];
      var specialElementHandlers = {
        '#bypassme': function(element, renderer){
          return true;
        }
      }

      margins = {
        top: 10, left: 10, width: 1500
      };

      pdf.fromHTML(soure, margins.left, margins.top, {'width': margins.width, 'elementHandlers' : specialElementHandlers}, function (dispose) {
        pdf.save(key +".pdf");
      })

    }


    function errorHandler(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Canno't read file !");
      }
    }

      function draggedOver(ev){

      }
