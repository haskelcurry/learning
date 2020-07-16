@Component({
  selector: 'scrollable',
  templateUrl: './scrollable.component.html',
  styleUrls: ['./scrollable.component.scss']
})
export class ScrollableComponent {
  ...

  ...

  ...

  ...

  ...

  ...

  onScroll(event: any) {
    if (
      event.target.offsetHeight + event.target.scrollTop >=
        event.target.scrollHeight - 120
    ) {
      this.loadMoreItems();
    }
  }
}
