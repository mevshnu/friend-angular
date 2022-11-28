import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  readValue =()=>
  {
    let data:any= {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
  console.log(data)
  }
}
