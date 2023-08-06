import { debounceTime } from 'rxjs';
import { BoardStateFacade } from 'src/app/store/facade/boards.state.facade';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoardModel } from 'src/app/api/models/board.model';
import { BUTTON_SIZE, BUTTON_TYPE } from 'src/app/shared/components/button/button.config';

@Component({
  selector: 'app-add-new-board',
  templateUrl: './add-new-board.component.html',
  styleUrls: ['./add-new-board.component.scss']
})
export class AddNewBoardComponent implements OnInit {
  @Input() formBoardGroup!: FormGroup;
  @Input() boardName = "boardControl";
  @Input() board!: BoardModel;
  @Input() boards!: BoardModel[];
  sizeButton = BUTTON_SIZE;
  newBoard!: BoardModel;
  @Output() closeForm = new EventEmitter<void>()

  get boardControlName():any {
    return this.formBoardGroup.controls["boardControl"]
  }

  constructor(private readonly boardStateFacade: BoardStateFacade) { }

  ngOnInit(): void {
    this.formBoardGroup = new FormGroup({
      boardName: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
      ]),
      boardDescription: new FormControl('', Validators.maxLength(70)),

    })

    this.boardControlName?.valueChanges.pipe(debounceTime(1000)).subscribe((value: string) =>{
      this.newBoard = {
        id: 1,
        createdAt: new Date(),
        name: value,
        description: '',
      }
      console.log('blablabla:', this.newBoard);
    })
  }

  addBoard(): void {
    if (this.formBoardGroup.valid) {
        const formData = {...this.formBoardGroup.value};
        console.log('Form data:', formData);
      //тут ми отримуємо в консолі імя та опис що вели у інпут
    }

    this.boardStateFacade.addNewBoard(this.newBoard);
    this.formBoardGroup.reset();
  }
}
