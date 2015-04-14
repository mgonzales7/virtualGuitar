#pragma strict

var Sname : String;


function Update() { if(Input.GetKeyDown(KeyCode.G)) {

	GameObject.Find("G String 1").SetActive(true); 
   for (var i = 1; i<=6; i++)
   {
         Sname = "Open String " + i;
         GameObject.Find(Sname).SetActive(false);
   }
   for (i = 1; i<=5; i++)
   {
         Sname = "C String " + i;
         GameObject.Find(Sname).SetActive(false);
   }
   for (i = 1; i<=6; i++)
   {
   		 Sname = "G String " + i;
   		 GameObject.Find(Sname).SetActive(true); 		 
 	}
  	
} }

function Update2() { if(Input.GetKeyDown(KeyCode.H)) {

	 
   for (var i = 1; i<=6; i++)
   {
         Sname = "Open String " + i;
         GameObject.Find(Sname).SetActive(false);
   }
   for (i = 1; i<=6; i++)
   {
         Sname = "G String " + i;
         GameObject.Find(Sname).SetActive(false);
   }
   for (i = 1; i<=5; i++)
   {
   		 Sname = "C String " + i;
   		 GameObject.Find(Sname).SetActive(true); 		 
 	}
  
} }
