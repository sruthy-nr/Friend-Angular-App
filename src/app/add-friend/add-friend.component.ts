import { Component } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
name=""
friendName=""
friendNickName=""
DescribeYourFriend=""

readValue=()=>
{
  console.log(this.name)
  console.log(this.friendName)
  console.log(this.friendNickName)
  console.log(this.DescribeYourFriend)
}
}
