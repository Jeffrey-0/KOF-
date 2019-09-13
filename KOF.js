//git测试修改
var timeShow = document.getElementById('time');
var person1 = document.getElementById('person1'),
	person2 = document.getElementById('person2'),
	blood1 = document.getElementById('blood1'),
	blood2 = document.getElementById('blood2'),
	win = document.getElementById('win'),
	person1_blood = 350,
	person2_blood = 350;
var action_or1 = 1,
	action_or2 = 1;	
var keyCode_ = 0;
timeShow.textContent = 99;
//显示倒计时
//显示血量
// function showBlood(person1_blood,person2_blood){
// 	blood1.style.width = person1_blood+'px';
// 	blood2.style.width = person2_blood+'px';
// }
// showBlood(person1_blood,person2_blood);

//监听键盘事件
document.onkeydown = function(e){
	 console.log(e.keyCode);
	if (e.keyCode == '32') {
		alert('暂停！');
	}
	else 
	{
		
		action(e.keyCode);
	}
	
}
//响应监听事件
function action(keyCode){
	if(action_or1 && keyCode>50 ){
		clearTimeout(timeout);
		keyCode_ = keyCode;
		switch(keyCode){

				case 65 :
				personAction1.left();
				break;
				case 68 :personAction1.right();
				break;
				case 87 :personAction1.up();
				break;
				case 83 :personAction1.down();
				break;
				case 73 :personAction1.attack2(); bloodLoss(personAction2,20);
				break;
				case 74 :personAction1.attack1(); bloodLoss(personAction2,10);
				break;
				case 75 :personAction1.kick(); bloodLoss(personAction2,20);
				break;
				case 76 :personAction1.slide();
				break;
				case 79 :personAction1.jump(); bloodLoss(personAction2,50);
				break;
				case 85 :personAction1.skill(); bloodLoss(personAction2,100);
				break;
				

			}
	}
	if(action_or2 && keyCode<50 ){
		clearTimeout(timeout);
		keyCode_ = keyCode;
		switch(keyCode){
				case 37 :personAction2.left();
				break;
				case 39 :personAction2.right();
				break;
				case 38 :personAction2.up();
				break;
				case 40 :personAction2.down();
				break;
				case 45 :bloodLoss(personAction1,20);personAction2.attack2();
				break;
				case 35 :bloodLoss(personAction1,10);personAction2.attack1();
				break;
				case 34 :bloodLoss(personAction1,20);personAction2.kick();
				break;
				case 13 :personAction2.slide();
				break;
				case 46 :bloodLoss(personAction1,50);personAction2.jump();
				break;
				case 12:personAction2.skill(); bloodLoss(personAction1,100);
				break;

			}
	}

}
var timeout;
function PersonAction(person){

	this.person = person;
	this.blood = 350;
	this.positionLeft = '50px';
	this.positionTop = '400px';
	this.direction = 1 ;
	//方向1 是左,0是右
	
	var that = this;
	this.left = function (){
		
		if(parseInt(this.positionLeft)>=5){
		 			 	this.person.style.width = '200px';
			this.person.style.height = '200px';
		 	this.positionLeft = parseInt(this.positionLeft) -25 + 'px';
			this.person.style.left = this.positionLeft;
			if(this.direction){
				this.person.style.backgroundImage = 'url('+this.person.id+'/left.gif)';
			}
			else this.person.style.backgroundImage = 'url('+this.person.id+'/right.gif)';
			timeout = setTimeout(function(){
			stand(that);
			},500);

		}		
	}
	this.right = function (){
		
		 if(parseInt(this.positionLeft)<=800){
		 	this.person.style.width = '200px';
			this.person.style.height = '200px';
		 	this.positionLeft = parseInt(this.positionLeft) +20 + 'px';
			this.person.style.left = this.positionLeft;
			if(this.direction){
				this.person.style.backgroundImage = 'url('+this.person.id+'/right.gif)';
			}
			else this.person.style.backgroundImage = 'url('+this.person.id+'/left.gif)';
			
			timeout = setTimeout(function(){
			stand(that);
			},500);
		}		
	}
	this.up = function(){
		action_or1 = 0;
		this.person.style.width = '200px';
		this.person.style.height = '400px';
		this.person.style.backgroundImage = 'url('+this.person.id+'/up.gif)';
		timeout = setTimeout(function(){
		stand(that);
		},1500);

	}
	this.down = function(){

		this.person.style.width = '150px';
		this.person.style.height = '150px';
		this.person.style.backgroundImage = 'url('+this.person.id+'/down.gif)';
		timeout = setTimeout(function(){
		stand(that);
		},500);
	}
	this.attack1 = function(){
		this.person.style.width = '280px';
		this.person.style.height = '220px';
		this.person.style.backgroundImage = 'url('+this.person.id+'/attack1.gif)';
		timeout = setTimeout(function(){
		stand(that);
		},500);
	}
	this.attack2 = function(){
		this.person.style.width = '280px';
		this.person.style.height = '220px';
		this.person.style.backgroundImage = 'url('+this.person.id+'/attack2.gif)';
		timeout = setTimeout(function(){
		stand(that);
		},500);
	}
	this.jump = function(){
		action_or1 = 0;
		this.person.style.width = '270px';
		this.person.style.height = '450px';
		this.person.style.backgroundImage = 'url('+this.person.id+'/jump.gif)';
		timeout = setTimeout(function(){
		stand(that);
		},1500);
	}
	this.kick = function(){

		this.person.style.width = '320px';
		this.person.style.height = '270px';
		this.person.style.backgroundImage = 'url('+this.person.id+'/kick.gif)';
		timeout = setTimeout(function(){
		stand(that);
		},1000);
	}
	this.skill = function(){
		if(this.direction == 0) {
			
			person2.style.left = parseInt(person2.style.left )-300 + 'px';
		}
		action_or1 = 0;
		this.person.style.width = '500px';
		this.person.style.height = '280px';
		this.person.style.backgroundImage = 'url('+this.person.id+'/bigSkill.gif)';
		timeout = setTimeout(function(){
		if(personAction2.direction == 0) 	person2.style.left = parseInt(person2.style.left )+300 + 'px';
		stand(that);
		},3000);
	}
	var that = this;
	this.slide = function(){
		action_or1 = 0;
		this.person.style.width = '500px';
		this.person.style.height = '230px';

		this.person.style.backgroundImage = 'url('+this.person.id+'/slide.gif)';

		// var Timeout = function(){
		// this.positionLeft = parseInt(this.positionLeft) +200 + 'px';
		// this.person.style.left = this.positionLeft;	
		// stand();
		// }
		if (!that.direction){
			that.positionLeft = parseInt(that.positionLeft) -200 + 'px';
			if(parseInt(that.positionLeft)<5) that.positionLeft = '5px';
			that.person.style.left = that.positionLeft;	
		}
		timeout = setTimeout(function(){
		if(that.direction){

			that.positionLeft = parseInt(that.positionLeft) +200 + 'px';
			if(parseInt(that.positionLeft)>800) that.positionLeft = '800px';
			that.person.style.left = that.positionLeft;	
		}
		
		stand(that);
		},700);
	}

}	
function stand(that){
	keyCode_ =0;
	action_or1 = 1;
	that.person.style.bottom = '0px';
	that.person.style.backgroundImage = 'url('+that.person.id+'/stand.gif)';
	that.person.style.width = '200px';
	that.person.style.height = '200px';
}
var personAction1 = new PersonAction(person1);
personAction1.skill = function(){
		if(this.direction == 0) {
			
			person1.style.left = parseInt(person1.style.left )-200 + 'px';
		}
		action_or1 = 0;
		this.person.style.width = '400px';
		this.person.style.height = '380px';
		this.person.style.backgroundImage = 'url(person1/bigSkill.gif)';

		person1.style.bottom = '-60px';
		timeout = setTimeout(function(){
		person1.style.bottom ='0px';
		if(personAction1.direction==0){
		person1.style.left =parseInt(person1.style.left )+200 + 'px';	
		}
		
		stand(personAction1);
		},6000);
	}

var personAction2 = new PersonAction(person2);
	personAction2.kick = function(){
		var that = this;
		this.person.style.width = '250px';
		this.person.style.height = '230px';
		this.person.style.backgroundImage = 'url('+this.person.id+'/kick.gif)';
		timeout = setTimeout(function(){
		stand(that);
		},1000);
	}


personAction2.direction = 0;
personAction2.positionLeft = '699px';
var direction_i = 0;
function changeDirection(){
if(parseInt(personAction1.positionLeft) >parseInt(personAction2.positionLeft ) && personAction1.direction ==1 ){


		personAction1.direction = 0;
		personAction1.person.style.transform = 'rotateY(180deg)';
		personAction2.direction = 1;
		personAction2.person.style.transform = 'rotateY(0deg)';

}
if(parseInt(personAction1.positionLeft) <parseInt(personAction2.positionLeft )&& personAction1.direction ==0){


		personAction1.direction = 1;
		personAction1.person.style.transform = 'rotateY(0deg)';
		personAction2.direction = 0;
		personAction2.person.style.transform = 'rotateY(180deg)';

}

}

var timer;
function showTime(){
 timer = setInterval(function(){
timeShow.textContent --;
changeDirection();
//倒计时
if(timeShow.textContent == 0) {
personAction1.blood>personAction2.blood?winer(personAction2):winer(personAction1);
		
	clearInterval(timer);

}
},1000);
}
showTime();
function bloodLoss(person,blood){

	if((Math.abs(parseInt(personAction1.positionLeft)-parseInt(personAction2.positionLeft))<=160)||((Math.abs(parseInt(personAction1.positionLeft)-parseInt(personAction2.positionLeft))<=260)&&blood==100))
	{
		person.blood = person.blood - blood;
		if (person.blood <0) person.blood = 0;
		if(person.person.id == "person1") {
			person1.style.backgroundImage = 'url(person1/ingury.gif)';
			if(person.blood < 250) blood1.style.backgroundColor = 'yellow';
			if(person.blood < 150) blood1.style.backgroundColor = 'red';
			blood1.style.width = person.blood +'px';
			if(blood ==100)
			{
				timeout = setTimeout(function(){
			stand(person);
			},3000);
			}else {
				timeout = setTimeout(function(){
			stand(person);
			},500);
			}
			
			
		}
		else if(person.person.id == "person2") {
			person2.style.backgroundImage = 'url(person2/ingury.gif)';
			if(person.blood < 250) blood2.style.backgroundColor = 'yellow';
			if(person.blood < 150) blood2.style.backgroundColor = 'red';
			blood2.style.width = person.blood +'px';
			if(blood ==100)
			{
				timeout = setTimeout(function(){
			stand(person);
			},6000);
			}else {
				timeout = setTimeout(function(){
			stand(person);
			},500);
			}
			
		}

		if(person.blood == 0) {
			clearTimeout(timeout);
			clearInterval(timer);
			document.onkeydown = function(){

	}
			timeout = setTimeout(function(){
			winer(person);
			},1000);
				
			}
	}
}
function winer(person){
	
	
	stand(personAction1);
	stand(personAction2);
	
	if(person.person.id== 'person1')
	{
		personAction2.person.style.backgroundImage = 'url(person2/win.gif)';
		
		personAction2.positionLeft = '350px';
		personAction2.person.style.left = '350px';
		personAction2.person.style.width = '350px';
		personAction2.person.style.height = '350px';

	}
	else {
		personAction1.person.style.backgroundImage = 'url(person1/win.gif)';
		personAction1.positionLeft = '350px';
		personAction1.person.style.left = '350px';
		personAction1.person.style.width = '350px';
		personAction1.person.style.height = '350px';
	}
	changeDirection();
	win.style.display = 'inline-block';
	


}