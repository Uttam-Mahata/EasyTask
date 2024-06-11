import { Component, Input, input, computed, EventEmitter, Output, output} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!:{
    id: string;
    avatar: string;
    name: string;
  } ;
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Output() select = new EventEmitter();
  // select = output<string>();


  //With Signals
  // avatar = input.required();
  // name = input.required();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // });




get imagePath() {

  return 'assets/users/' + this.user.avatar;
}
  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
