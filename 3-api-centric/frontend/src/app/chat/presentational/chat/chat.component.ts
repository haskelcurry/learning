import {
  Component,
  EventEmitter,
  Output,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

export interface Message {
  avatar: string;
  username: string;
  text: string;
}

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  @Input() chat: Message[] = [];
  @Input() message = '';

  @Output() onChange = new EventEmitter<string>();
  @Output() onSend = new EventEmitter<string>();
  @Output() onClose = new EventEmitter();
}
