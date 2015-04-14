#pragma strict

var Sname : String;
var obj: GameObject;
var GArray: GameObject[];
var CArray: GameObject[];
var OArray: GameObject[];
var FArray: GameObject[];
var Cactive: boolean;
var Oactive: boolean;
var Gactive: boolean;
var Factive: boolean;

function Start() {
	OArray= new GameObject[6];
	GArray= new GameObject[6];
	Oactive=true;
   for (var i = 1; i<=6; i++)
   {
   		 Sname = "G String " + i;
   		 obj=GameObject.Find(Sname);
   		 GArray[i-1]=obj;
   		 obj.SetActive(false); 
   		 Gactive=false;		 
 	}
 	CArray= new GameObject[5];
 	for (i = 1; i<=5; i++)
   {
   		 Sname = "C String " + i;
   		 obj=GameObject.Find(Sname);
   		 CArray[i-1]=obj;
   		 obj.SetActive(false);	
   		 Cactive=false;	 
 	}		
 	FArray= new GameObject[6];
 	for (i = 1; i<=6; i++)
   {
   		 Sname = "F String " + i;
   		 obj=GameObject.Find(Sname);
   		 FArray[i-1]=obj;
   		 obj.SetActive(false); 
   		 Factive=false;		 
 	}
}

function Update() {
	if(Input.GetKeyDown(KeyCode.G)){
   if(Oactive==true){
   		for (var i = 1; i<=6; i++) 
  			 {
   				Sname = "Open String " + i;
   				obj=GameObject.Find(Sname);
   				OArray[i-1]=obj;
   				obj.SetActive(false);
   				Oactive=false;	
   		 
		}
	}
	if(Factive==true){
   		for (i = 1; i<=6; i++) 
  			 {
   				Sname = "F String " + i;
   				obj=GameObject.Find(Sname);
   				FArray[i-1]=obj;
   				obj.SetActive(false);
   				Factive=false;	
   		 
		}
	}
	if(Cactive==true){
   		for (i = 1; i<=5; i++)
 			  {
   				 Sname = "C String " + i;
   				 obj=GameObject.Find(Sname);
   				 CArray[i-1]=obj;
   				 obj.SetActive(false);	
   				 Cactive=false;	 
 				}	
 	}
 	
     for (i = 1; i<=6; i++)
   {
   		var aobj : GameObject = GArray[i-1];
   		aobj.SetActive(true);
   		Gactive=true;
	}
	}
	if(Input.GetKeyDown(KeyCode.C)) {
	if(Oactive==true){
   		for (i = 1; i<=6; i++) 
  			 {
   				Sname = "Open String " + i;
   				obj=GameObject.Find(Sname);
   				OArray[i-1]=obj;
   				obj.SetActive(false);
   				Oactive=false;	
   		 
		}
	}
	if(Factive==true){
   		for (i = 1; i<=6; i++) 
  			 {
   				Sname = "F String " + i;
   				obj=GameObject.Find(Sname);
   				FArray[i-1]=obj;
   				obj.SetActive(false);
   				Factive=false;	
   		 
		}
	}
	if(Gactive==true){
   		for (i = 1; i<=6; i++)
  		 {
      	   Sname = "G String " + i;
   			 obj=GameObject.Find(Sname);
   			 GArray[i-1]=obj;
   			 obj.SetActive(false);
   			 Gactive=false;
   		}
   	}
   	
   for (i = 1; i<=5; i++)
   {
   		aobj = CArray[i-1];
   		aobj.SetActive(true);
   		Cactive=true;		 
 	}
	
	}
	if(Input.GetKeyDown(KeyCode.R)) {
	 if(Gactive==true){
   		for (i = 1; i<=6; i++)
  		 {
      	   Sname = "G String " + i;
   			 obj=GameObject.Find(Sname);
   			 GArray[i-1]=obj;
   			 obj.SetActive(false);
   			 Gactive=false; 
   		}
   	}
   	if(Factive==true){
   		for (i = 1; i<=6; i++) 
  			 {
   				Sname = "F String " + i;
   				obj=GameObject.Find(Sname);
   				FArray[i-1]=obj;
   				obj.SetActive(false);
   				Factive=false;	
   		 
		}
	}
   if(Cactive==true){
   		for (i = 1; i<=5; i++)
 			  {
   				 Sname = "C String " + i;
   				 obj=GameObject.Find(Sname);
   				 CArray[i-1]=obj;
   				 obj.SetActive(false);
   				 Cactive=false;		 
 				}	
 	}
   for (i = 1; i<=6; i++)
   {
   		aobj= OArray[i-1];
   		aobj.SetActive(true);
   		Oactive=true;		 
 	}
  
}
		if(Input.GetKeyDown(KeyCode.F)) {
	 if(Gactive==true){
   		for (i = 1; i<=6; i++)
  		 {
      	   Sname = "G String " + i;
   			 obj=GameObject.Find(Sname);
   			 GArray[i-1]=obj;
   			 obj.SetActive(false);
   			 Gactive=false; 
   		}
   	}
   	if(Oactive==true){
   		for (i = 1; i<=6; i++) 
  			 {
   				Sname = "Open String " + i;
   				obj=GameObject.Find(Sname);
   				OArray[i-1]=obj;
   				obj.SetActive(false);
   				Oactive=false;	
   		 
		}
	}
   if(Cactive==true){
   		for (i = 1; i<=5; i++)
 			  {
   				 Sname = "C String " + i;
   				 obj=GameObject.Find(Sname);
   				 CArray[i-1]=obj;
   				 obj.SetActive(false);
   				 Cactive=false;		 
 				}	
 	}
   for (i = 1; i<=6; i++)
   {
   		aobj= FArray[i-1];
   		aobj.SetActive(true);
   		Factive=true;		 
 	}
  
}
	
} 

